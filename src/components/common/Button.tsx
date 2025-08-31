export default function Button({
  active = true,
  label,
}: {
  active?: boolean;
  label: string;
}) {
  return (
    <button
      className={`w-full h-11 rounded-2xl flex justify-center items-center ${
        active ? "bg-main" : "bg-gray"
      }`}
    >
      <div className="body1 text-white">{label}</div>
    </button>
  );
}
