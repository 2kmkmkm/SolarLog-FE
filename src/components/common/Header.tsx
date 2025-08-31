import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="h-14 shadow-header px-3 flex items-center justify-between">
      <Icon icon="ion:chevron-back" className="w-8 h-8" />
      <div className="heading1 flex justify-center">회원가입</div>
      <div className="w-8 h-8" />
    </div>
  );
}
