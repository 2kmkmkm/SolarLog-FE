type ButtonProps = {
  active?: boolean;
  modal?: boolean;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  active = true,
  modal = false,
  label,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`btn w-full body1 flex justify-center items-center ${
        active ? "bg-main" : "bg-gray"
      } ${modal ? "h-9 max-w-40 rounded-xl" : "h-11 rounded-2xl"}`}
    >
      <div className="heading2 text-white">{label}</div>
    </button>
  );
}
