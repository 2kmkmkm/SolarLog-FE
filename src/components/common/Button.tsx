export default function Button({
  active = true,
  modal = false,
  label,
}: {
  active?: boolean;
  modal?: boolean;
  label: string;
}) {
  return (
    <button
      className={`w-full body1 flex justify-center items-center ${
        active ? "bg-main" : "bg-gray"
      } ${modal ? "h-9 max-w-40 rounded-xl" : "h-11 rounded-2xl"}`}
    >
      <div className="text-white">{label}</div>
    </button>
  );
}
