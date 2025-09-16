import Button from "@components/common/Button";
import Header from "@components/common/Header";
import LabelInput from "@components/signup/LabelInput";
import SmallButton from "@components/signup/SmallButton";
import { AddressModal } from "@components/signup/AddressModal";
import { useState, useRef } from "react";
import { getCheckedId, postSignup } from "@apis/user";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [form, setForm] = useState({
    userId: "",
    password: "",

    modelName: "",
    maker: "",
    serialNum: "",

    installDate: "",
    installLocation: "",
    initialPower: "",
  });

  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [isUserIdChecked, setIsUserIdChecked] = useState(false);
  const [isUserIdCheckedAlert, setIsUserIdCheckedAlert] = useState(false);
  const [isPostCodeOpen, setIsPostCodeOpen] = useState(false);

  const userIdRef = useRef<HTMLInputElement>(null);
  const nav = useNavigate();

  // 아이디 중복 확인
  const handleCheckUserId = async (
    e: React.MouseEvent<HTMLButtonElement>,
    userId: string
  ) => {
    e.preventDefault();

    if (!userId) {
      alert("아이디를 입력해주세요.");
      return;
    }

    try {
      const res = await getCheckedId(userId);

      if (res.data.success) {
        setIsUserIdChecked(true);
        setIsUserIdCheckedAlert(false);
        alert(res.data.message);
      } else {
        alert(res.data.message);
        return;
      }
    } catch (err) {
      console.error("getCheckId error: ", err);
    }
  };

  // 비밀번호 확인
  const isMisMatched =
    !!form.password &&
    !!confirmedPassword &&
    form.password !== confirmedPassword;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "userId") {
      setIsUserIdChecked(false);
      setIsUserIdCheckedAlert(false);
    }
  };

  // 모든 입력 필드에 값이 입력되었는지 확인
  const allFilled = Object.values(form).every((v) => String(v).trim() !== "");
  const isFormValid = allFilled && isUserIdChecked && !isMisMatched;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isUserIdChecked) {
      setIsUserIdCheckedAlert(true);
      userIdRef.current?.focus();
      return;
    }
    if (!isFormValid) return;

    try {
      const res = await postSignup({
        ...form,
        initialPower: Number(form.initialPower),
      });

      if (res.data.success) {
        alert("회원가입이 완료되었습니다.");
        nav("/login");
      } else {
        alert("회원가입 중 오류가 발생했습니다.");
        return;
      }
    } catch (err) {
      console.log("postSingup error: ", err);
    }
  };

  return (
    <>
      <Header title="회원가입" />
      <form className="flex flex-col mx-5 my-5 gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="heading2 text-sub text-center">사용자 정보</div>
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex gap-[6px] items-end">
                <LabelInput
                  label="아이디"
                  value={form.userId}
                  name="userId"
                  onChange={handleChange}
                  ref={userIdRef}
                  required
                />
                <SmallButton
                  label={"중복\n 확인"}
                  onClick={(e) => handleCheckUserId(e, form.userId)}
                />
                {/* 중복 확인 후 모달 추가 */}
              </div>
              {isUserIdCheckedAlert && (
                <span className="body2 text-red ml-1">
                  아이디 중복 확인을 완료해주세요
                </span>
              )}
            </div>
            <LabelInput
              label="비밀번호"
              type="password"
              value={form.password}
              name="password"
              onChange={handleChange}
              required
            />
            <div>
              <LabelInput
                label="비밀번호 확인"
                type="password"
                value={confirmedPassword}
                name="confirmedPassword"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                required
              />
              {isMisMatched && (
                <span className="body3 text-red ml-1">
                  비밀번호가 일치하지 않습니다
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="heading2 text-sub text-center">태양광 패널 정보</div>
          <div className="flex flex-col gap-3">
            <LabelInput
              label="모델명"
              value={form.modelName}
              name="modelName"
              onChange={handleChange}
              required
            />
            <LabelInput
              label="제조사"
              value={form.maker}
              name="maker"
              onChange={handleChange}
              required
            />
            <LabelInput
              label="시리얼 넘버"
              value={form.serialNum}
              name="serialNum"
              onChange={handleChange}
              required
            />
            <LabelInput
              label="설치일"
              type="date"
              value={form.installDate ?? ""}
              name="installDate"
              onChange={handleChange}
              required
            />
            <div className="flex gap-[6px] items-end">
              <LabelInput
                label="설치 위치"
                value={form.installLocation}
                name="installLocation"
                onChange={handleChange}
                required
              />
              <SmallButton
                icon="material-symbols:search-rounded"
                onClick={() => setIsPostCodeOpen(true)}
              />
              {isPostCodeOpen && (
                <AddressModal
                  isOpen={isPostCodeOpen}
                  onClose={() => setIsPostCodeOpen(false)}
                  onSelect={(addr) =>
                    setForm((prev) => ({ ...prev, installLocation: addr }))
                  }
                />
              )}
            </div>
            <LabelInput
              label="최초 출력값 (kW)"
              type="number"
              value={form.initialPower ?? ""}
              name="initialPower"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <Button label="회원가입" className="mt-10" type="submit" />
      </form>
    </>
  );
}
