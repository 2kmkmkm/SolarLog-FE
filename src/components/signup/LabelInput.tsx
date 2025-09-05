import Input from "../common/Input";
import { forwardRef } from "react";

type LabelInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const LabelInput = forwardRef<HTMLInputElement, LabelInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="body2 text-darkgray px-1">{label}</div>
        <Input ref={ref} {...props} />
      </div>
    );
  }
);
export default LabelInput;
