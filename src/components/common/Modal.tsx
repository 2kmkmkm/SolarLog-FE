import Button from "./Button";

export default function Modal({ contents }: { contents: string }) {
  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black/40 flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center items-center px-7 py-6 max-w-60 min-w-56 rounded-3xl gap-2">
        <div className="body1 py-4">{contents}</div>
        <Button label="확인" modal />
      </div>
    </div>
  );
}
