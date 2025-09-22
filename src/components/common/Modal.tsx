import { useEffect } from "react";

export default function Modal({
  contents,
  isOpen,
}: {
  contents: string;
  isOpen: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full min-h-full fixed inset-0 bg-darkgray/80 flex justify-center items-center z-[999]">
      <div className="flex flex-col justify-center items-center max-x-60 min-w-52 px-7 py-5 bg-white rounded-3xl ">
        <div className="body1 py-5 justify-center items-center">{contents}</div>
        <button
          onClick={isOpen}
          type="button"
          className="w-full h-8 text-white bg-main rounded-xl flex flex-col items-center justify-center"
        >
          확인
        </button>
      </div>
    </div>
  );
}
