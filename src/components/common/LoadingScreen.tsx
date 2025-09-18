import { BeatLoader } from "react-spinners";
export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 bg-white flex items-center justify-center">
      <BeatLoader color="#FF770F" size={15} />
    </div>
  );
}
