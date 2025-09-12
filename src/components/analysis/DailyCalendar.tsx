import { useOutsideClick } from "@hooks/useOutsideclick";
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
  subDays,
} from "date-fns";
import {
  useCallback,
  useMemo,
  useState,
  useRef,
  type Dispatch,
  type SetStateAction,
} from "react";

export default function DailyCalendar({
  currentDate,
  setCurrentDate,
}: {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick([modalRef], () => setIsOpen(false));

  const today = new Date();
  const yesterday = subDays(today, 1);
  const currentYear = today.getFullYear();
  const currentMonthIndex = today.getMonth(); // 이전 달

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

  // 이전 달로 이동
  const handlePrevMonth = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate, setCurrentDate]);

  // 다음 달로 이동
  const handleNextMonth = useCallback(() => {
    if (
      currentDate.getFullYear() < currentYear ||
      (currentDate.getFullYear() === currentYear &&
        currentDate.getMonth() < currentMonthIndex)
    )
      setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate, setCurrentDate, currentYear, currentMonthIndex]);

  const selectedYear = format(currentDate, "yyyy년");
  const selectedMonth = format(currentDate, "M월");
  const selectedDay = format(currentDate, "d일");

  return (
    <div className="relative flex items-center gap-3 w-full justify-center">
      <button onClick={handlePrevMonth}>
        <Icon icon="ion:chevron-back" className="w-4 h-4 text-gray" />
      </button>
      <button
        className="body1 text-darkgray"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedYear} {selectedMonth} {selectedDay}
      </button>
      <button
        onClick={handleNextMonth}
        disabled={
          currentDate.getFullYear() === currentYear &&
          currentDate.getMonth() === currentMonthIndex
        }
        className={`${
          currentDate.getFullYear() === currentYear &&
          currentDate.getMonth() === currentMonthIndex
            ? "opacity-40 cursor-not-allowed"
            : ""
        }`}
      >
        <Icon
          icon="ion:chevron-back"
          className="w-4 h-4 text-gray scale-x-[-1]"
        />
      </button>
      {isOpen && (
        <div className="absolute top-full z-50 mt-2 shadow-modal rounded-xl bg-white">
          <div className="grid grid-cols-7 w-64 overflow-hidden rounded-xl">
            {weekMock.map((day, idx) => {
              let colorClass = "text-darkgray bg-white";
              if (idx === 0) colorClass = "text-red bg-lightlightgray";
              else if (idx === 6) colorClass = "text-blue bg-lightlightgray";

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
              const isSelected = currentDate && isSameDay(day, currentDate); // 같은 연/월/일인지 확인
              const dayOfWeek = day.getDay(); // 요일을 숫자로 변환 0~6

              const isFuture = day > yesterday;

              let bgColor = "bg-white";
              if (dayOfWeek === 0 || dayOfWeek === 6)
                bgColor = "bg-lightlightgray";

              return (
                <button
                  key={index}
                  onClick={() => {
                    if (!isFuture) {
                      setCurrentDate(day);
                      setIsOpen(false);
                    }
                  }}
                  disabled={isFuture}
                  className={`p-1.5 ${bgColor} ${
                    isCurrentMonth ? "text-darkgray" : "text-lightgray"
                  } ${isFuture ? "text-lightgray cursor-not-allowed" : ""}`}
                >
                  <div
                    className={`body2 text-center ${
                      isSelected ? "bg-blue rounded-full text-white" : ""
                    }`}
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
