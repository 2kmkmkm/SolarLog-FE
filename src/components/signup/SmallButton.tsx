import { Icon } from "@iconify/react";

type SmallButtonProps = {
  label?: string | React.ReactNode;
  icon?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SmallButton({
  label,
  icon = "",
  type = "button",
  ...props
}: SmallButtonProps) {
  return (
    <button
      type={type}
      className="btn flex-shrink-0 w-11 h-11 bg-main rounded-lg text-white flex justify-center items-center"
      {...props}
    >
      <div className="body3 whitespace-pre-line">{label}</div>
      <Icon icon={icon} className="w-6 h-6" />
    </button>
  );
}
