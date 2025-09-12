import { Icon } from "@iconify/react/dist/iconify.js";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  differenceInCalendarDays,
  isSameDay,
  isSameMonth,
  subMonths,
  addMonths,
} from "date-fns";
import {
  useCallback,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export default function Calendar({
  currentDate,
  setCurrentDate,
}: {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // 어제 날짜
  const monthStart = startOfMonth(currentDate); // 현재 달의 시작 날짜
  const monthEnd = endOfMonth(currentDate); // 현재 달의 마지막 날짜

  const startDate = startOfWeek(monthStart); // 현재 달의 시작 날짜가 포함된 주의 시작 날짜
  const endDate = endOfWeek(monthEnd); // 현재 달의 마지막 날짜가 포함된 주의 끝 날짜

  const weekMock = ["일", "월", "화", "수", "목", "금", "토"];

  // 날짜 배열을 만드는 함수
  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;

    // day가 endDate와 같거나 더 앞에 있으면 while문 반복
    while (differenceInCalendarDays(endDate, day) >= 0) {
      // 일자를 하나씩 늘려가며 해당 월의 끝 날짜까지 배열에 추가
      monthArray.push(day);
      day = addDays(day, 1);
    }

    return monthArray;
  }, [startDate, endDate]);

  // 이전 일로 이동
  const handlePrevMonth = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  // 다음 일로 이동
  const handleNextMonth = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);

  const currentYear = format(currentDate, "yyyy년");
  const currentMonth = format(currentDate, "M월");
  const currnetDay = format(currentDate, "d일");

  return (
    <div className="relative flex items-center gap-3 w-full justify-center">
      <button onClick={handlePrevMonth}>
        <Icon icon="ion:chevron-back" className="w-4 h-4 text-gray" />
      </button>
      <button
        className="body1 text-darkgray"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {currentYear} {currentMonth} {currnetDay}
      </button>
      <button onClick={handleNextMonth}>
        <Icon
          icon="ion:chevron-back"
          className="w-4 h-4 text-gray scale-x-[-1]"
        />
      </button>
      {isOpen && (
        <div className="absolute top-full z-50 mt-2 bg-white">
          <div className="grid grid-cols-7 w-64 overflow-hidden rounded-xl">
            {weekMock.map((day, idx) => {
              let colorClass = "text-darkgray";
              if (idx === 0) colorClass = "text-red bg-bg";
              else if (idx === 6) colorClass = "text-blue bg-bg";

              return (
                <div
                  key={day}
                  className={`body2 p-1.5 text-center ${colorClass}`}
                >
                  {day}
                </div>
              );
            })}
            {createMonth.map((day, index) => {
              const isCurrentMonth = isSameMonth(day, monthStart); // 현재 날짜의 일자인지 확인
              const isSelected = currentDate && isSameDay(day, currentDate);
              const dayOfWeek = day.getDay();

              let bgColor = "";
              if (dayOfWeek === 0 || dayOfWeek === 6) bgColor = "bg-bg";

              return (
                <button
                  key={index}
                  onClick={() => setCurrentDate(day)}
                  className={`p-1.5 ${bgColor} `}
                >
                  <div
                    className={`body2 text-center ${
                      isCurrentMonth ? "text-darkgray" : "text-lightgray"
                    } ${isSelected ? "bg-blue rounded-full text-white" : ""}`}
                  >
                    {format(day, "d")}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
