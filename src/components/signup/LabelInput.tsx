import Input from "../common/Input";

export default function LabelInput({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="body2 text-darkgray px-1">{label}</div>
      <Input />
    </div>
  );
}
