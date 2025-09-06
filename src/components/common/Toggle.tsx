type ToggleProps = {
  options: string[];
  value: string;
  onChange: (v: string) => void;
};

function ToggleItem({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`body3 w-full py-1.5 flex justify-center items-center rounded-[20px] ${
        selected ? "bg-main text-white" : "bg-white text-gray"
      }`}
    >
      {label}
    </button>
  );
}

export default function Toggle({ options, value, onChange }: ToggleProps) {
  return (
    <div
      role="group"
      aria-label="view toggle"
      className="body2 w-56 bg-white rounded-[20px] shadow-box flex justify-center items-center"
    >
      {options.map((opt) => (
        <ToggleItem
          key={opt}
          label={opt}
          selected={opt === value}
          onClick={() => onChange(opt)}
        />
      ))}
    </div>
  );
}
