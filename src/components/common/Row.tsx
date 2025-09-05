type RowProps = {
  label: string;
  num: number;
  unit: string;
};

export default function Row({ label, num, unit }: RowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="body3 text-darkgray">{label}</span>
      <div className="space-x-1">
        <span className="body2_bold text-green">{num}</span>
        <span className="body3 text-darkgray">{unit}</span>
      </div>
    </div>
  );
}
