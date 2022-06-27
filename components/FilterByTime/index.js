import CustomCalender from "../Calender";
import { useState } from "react";

export default function FilterByName() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [date, setDate] = useState(new Date());
  const [close, setClose] = useState(false);

  return (
    <div className="relative">
      <h1 className="text-base font-semibold text-center mb-[14px]">Tanggal Periode</h1>

      <button
        onClick={() => setClose(!close)}
        className="box-border border-secondary border-x border-y rounded-sm bg-white text-secondary text-xs py-2.5 px-6 flex items-center"
      >
        <img src="/calendar.svg" alt="calendar" className="mr-1" />
        {date[0] ? (
          `${days[date[0].getDay()]} ${date[0].getDate()} ${months[date[0].getMonth()]}`
        ) : (
          <>
            <span>Check In&nbsp;</span>
          </>
        )}
        {"   "}-{"   "}
        {date[0] ? (
          `${days[date[1].getDay()]} ${date[1].getDate()} ${months[date[1].getMonth()]}`
        ) : (
          <span>&nbsp;Check Out</span>
        )}
      </button>
      <div className={`absolute ${close ? "block" : "hidden"}`}>
        <CustomCalender date={date} setDate={setDate} />
      </div>
    </div>
  );
}
