import { Icon } from "@iconify/react";

export default function SmallButton({
  label,
  icon = "icon",
}: {
  label?: string;
  icon?: string;
}) {
  return (
    <button className="w-11 h-11 bg-main rounded-lg text-white flex justify-center items-center">
      <div className="body2 whitespace-pre-line">{label}</div>
      <Icon icon={icon} className="w-6 h-6" />
    </button>
  );
}
