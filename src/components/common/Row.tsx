type RowProps = {
  label: string;
  num?: number;
  unit: string;
  status?: "정상" | "주의" | "교체 필요";
};

export default function Row({ label, num, unit, status }: RowProps) {
  let statusColor = "text-green";
  if (status === "주의") statusColor = "text-sub";
  else if (status === "교체 필요") statusColor = "text-red";

  return (
    <div className="flex items-center justify-between">
      <span className="body2 text-gray">{label}</span>
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-0.5">
          <span className="body2_bold text-green">{num}</span>
          <span className="body2 text-darkgray">{unit}</span>
        </div>
        {status && (
          <div className="bg-bg rounded-md px-1 py-0.5 flex items-center justify-center">
            <span className={`body3_bold ${statusColor}`}>⦁ {status}</span>
          </div>
        )}
      </div>
    </div>
  );
}
