import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`body1 px-3 h-11 rounded-xl border-[1.8px] border-lightgray focus:border-gray w-full`}
    />
  );
});

export default Input;
