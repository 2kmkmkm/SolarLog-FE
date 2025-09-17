export function formatIsoToDayOfWeekTime(iso: string): string {
  const date = new Date(iso);

  const day = date.getDate();
  const weekday = new Intl.DateTimeFormat("ko-KR", { weekday: "short" }).format(
    date
  );
  const time = date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${day}일(${weekday}) ${time}`;
}

export function formatIsoToDotDate(iso: string): string {
  const date = new Date(iso);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export function formatIsoToDotDay(iso: Date): string {
  const date = new Date(iso);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const korean = dayNames[date.getDay()];

  return `${year}.${month}.${day} (${korean})`;
}

export function formatIsoToMonthDayTime(iso: Date): string {
  const date = new Date(iso);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const time = date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${month}.${day} ${time}`;
}
