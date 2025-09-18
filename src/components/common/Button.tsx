type ButtonProps = {
  modal?: boolean;
  label: string | React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  modal = false,
  label,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full flex justify-center items-center bg-main disabled:bg-gray
      ${modal ? "h-9 max-w-40 rounded-xl" : "h-11 rounded-2xl"}`}
    >
      <div className="heading2 text-white">{label}</div>
    </button>
  );
}
