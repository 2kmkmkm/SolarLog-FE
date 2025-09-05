import { Icon } from "@iconify/react";
import { forwardRef } from "react";

type LoginInputProps = {
  icon: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <div className="shadow-input px-3 py-2 flex gap-1.5 border-[2.5px] border-main rounded-2xl">
        <Icon icon={icon} className="text-lightgray w-6 h-6" />
        <input className="body1 w-full bg-white" ref={ref} {...props} />
      </div>
    );
  }
);

export default LoginInput;
