import Button from "@components/common/Button";
import LoginInput from "@components/login/LoginInput";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useAppDispatch } from "@hooks/useRedux";
import { login } from "@features/authThunk";

export default function LoginPage() {
  const nav = useNavigate();

  const dispatch = useAppDispatch();

  const [userId, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userId.trim() === "") {
      setError("아이디를 입력하세요");
      userIdRef.current?.focus();
      return;
    } else if (password.trim() === "") {
      setError("비밀번호를 입력하세요");
      passwordRef.current?.focus();
      return;
    }

    try {
      const res = await dispatch(login({ userId, password })).unwrap();

      if (res.success) {
        nav("/");
      }
    } catch (err) {
      setError(String(err));
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-12">
      <div className="flex flex-col mt-14 gap-8">
        <div className="flex flex-col justify-center items-center gap-1.5">
          <img src="/Logo_img.svg" className="w-36 h-36" />
          <img src="/Logo_word.svg" className="w-28" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <LoginInput
              ref={userIdRef}
              icon="material-symbols:person-rounded"
              placeholder="ID"
              value={userId}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <LoginInput
              ref={passwordRef}
              icon="mdi:password"
              placeholder="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div
              className={`body3 text-red text-center h-3.5 ${
                error ? "visible" : "overflow-hidden"
              }`}
            >
              {error}
            </div>
            <Button label="로그인" type="submit" />
            <button
              className="body3_bold text-lightgray"
              onClick={() => nav("/signup")}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
