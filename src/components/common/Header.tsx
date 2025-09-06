import { Icon } from "@iconify/react";

export default function Header({ title }: { title: string }) {
  return (
    <div className="z-40 h-[52px] flex-shrink-0 shadow-header px-3 flex items-center justify-between">
      <Icon icon="ion:chevron-back" className="w-7 h-7" />
      <div className="heading1 flex justify-center">{title}</div>
      <div className="w-7 h-7" />
    </div>
  );
}
