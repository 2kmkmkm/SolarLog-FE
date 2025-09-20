import { Icon } from "@iconify/react/dist/iconify.js";
import { format, isSameDay, subYears, addYears } from "date-fns";
import {
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export default function MonthlyCalendar({
  currentMonth,
  setCurrentMonth,
}: {
  currentMonth: Date;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthIndex = today.getMonth();

  // 1 ~ 12월 배열
  const months = Array.from(
    { length: 12 },
    (_, i) => new Date(currentMonth.getFullYear(), i, 1)
  );

  // 이전 연도로 이동
  const handlePrevYear = useCallback(() => {
    setCurrentMonth(subYears(currentMonth, 1));
  }, [currentMonth, setCurrentMonth]);

  // 다음 연도로 이동
  const handleNextYear = useCallback(() => {
    if (currentMonth.getFullYear() < currentYear)
      setCurrentMonth(addYears(currentMonth, 1));
  }, [currentMonth, setCurrentMonth, currentYear]);

  const selectedYear = format(currentMonth, "yyyy년");
  const selectedMonth = format(currentMonth, "M월");

  return (
    <div className="relative flex items-center gap-3 w-full justify-center">
      <button onClick={handlePrevYear}>
        <Icon icon="ion:chevron-back" className="w-4 h-4 text-gray" />
      </button>
      <button
        className="body1 text-darkgray"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedYear} {selectedMonth}
      </button>
      <button
        onClick={handleNextYear}
        disabled={currentMonth.getFullYear() === currentYear}
        className={`${
          currentMonth.getFullYear() === currentYear
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
        <div className="absolute top-full z-50 mt-2 bg-white shadow-modal rounded-lg">
          <div className="grid grid-cols-3 w-64 overflow-hidden ">
            {months.map((month, index) => {
              const isSelected = currentMonth && isSameDay(month, currentMonth);
              const isFutureMonth =
                month.getFullYear() > currentYear ||
                (month.getFullYear() === currentYear &&
                  month.getMonth() > currentMonthIndex);

              return (
                <button
                  key={index}
                  onClick={() => {
                    if (!isFutureMonth) {
                      setCurrentMonth(month);
                      setIsOpen(false);
                    }
                  }}
                  disabled={isFutureMonth}
                  className={`p-2 ${
                    isFutureMonth ? "text-lightgray cursor-not-allowed" : ""
                  }`}
                >
                  <div
                    className={`body2 text-center  ${
                      isSelected ? "bg-blue rounded-lg text-white" : ""
                    }`}
                  >
                    {format(month, "M")}월
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
