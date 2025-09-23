import { useNavigate } from "react-router-dom";
import { onForegroundMessage, requestFcmToken } from "@utils/firebase";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { useEffect, useState } from "react";
import { decodeToken } from "@utils/decodeToken";
import { setToken } from "@features/authSlice";
import { postFCMToken } from "@apis/detection";
import AppRoutes from "./AppRoutes";
import Modal from "@components/common/Modal";

function App() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { token: authToken } = useAppSelector((state) => state.auth);

  const [alarmId, setAlarmId] = useState<string | null>(null);
  const [contents, setContents] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = decodeToken(token);
      dispatch(
        setToken({
          token,
          userId: payload.sub,
          installLocation: payload.installLocation,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (!authToken) return;
    requestFcmToken().then((token) => {
      if (token) {
        postFCMToken(token).catch((err) => {
          console.log("postFCMToken Error: ", err);
        });
      }
    });
  }, [authToken]);

  useEffect(() => {
    const unsubscribe = onForegroundMessage((payload) => {
      console.log("FCM 알림 수신: ", payload);

      if (payload.data?.alarmId) {
        setAlarmId(payload.data.alarmId);
        setContents(`${payload.data.eventDetail}이 감지되었습니다`);
        setIsOpen(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleConfirm = () => {
    if (alarmId) {
      nav(`/detection/${alarmId}`);
    }
    setIsOpen(false);
    setAlarmId(null);
  };

  return (
    <>
      <AppRoutes />
      {isOpen && <Modal contents={contents} isOpen={handleConfirm} />}
    </>
  );
}

export default App;
