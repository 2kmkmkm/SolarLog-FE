import Button from "@components/common/Button";
import LoginInput from "@components/login/LoginInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const nav = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-12">
      <div className="flex flex-col mt-14 gap-9">
        <div className="flex flex-col justify-center items-center gap-1.5">
          <img src="/Logo_img.svg" className="w-36 h-36" />
          <img src="/Logo_word.svg" className="w-28" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <LoginInput
              icon="material-symbols:person-rounded"
              placeholder="ID"
              value={id}
              id="id"
              onChange={(e) => setId(e.target.value)}
            />
            <LoginInput
              icon="mdi:password"
              placeholder="password"
              value={password}
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button label="로그인" type="submit" />
            <button
              className="body2_bold text-lightgray"
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
