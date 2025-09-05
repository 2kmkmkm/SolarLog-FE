import { Icon } from "@iconify/react";

type LoginInputProps = {
  icon: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function LoginInput({icon, ...props}: LoginInputProps) {
  return (
    <div className="shadow-input px-3 py-2 flex gap-1.5 border-[2.5px] border-main rounded-2xl">
      <Icon icon={icon} className="text-lightgray w-6 h-6" />
      <input className="body1 w-full bg-white" {...props} />
    </div>
  );
}
