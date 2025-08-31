function ToggleItem({
  label,
  isSelected,
}: {
  label: string;
  isSelected?: boolean;
}) {
  return (
    <button
      className={`w-full py-2 flex justify-center items-center rounded-[20px] ${
        isSelected ? "bg-main text-white" : "bg-white text-gray"
      }`}
    >
      {label}
    </button>
  );
}

export default function Toggle() {
  return (
    <div className="body2 w-56 bg-white rounded-[20px] shadow-box flex justify-center items-center">
      <ToggleItem label="일별" isSelected />
      <ToggleItem label="월별" />
    </div>
  );
}
