import React, { useState, useRef, useEffect } from "react";
import Calendar from "./Calendar";
import { month, year } from "../assets/SelectContent";
import CalendarHearder from "./CalendarHearder";

const DatePicker = ({
  title,
  id,
  //  setSelected
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const [selectedDay, setSelectedDay] = useState(new Date(Date.now()).getDate());
  const [selectedMonth, setSelectedMonth] = useState(month[new Date(Date.now()).getMonth()].name);
  const [selectedYear, setSelectedYear] = useState(new Date(Date.now()).getFullYear());

  const [input, setInput] = useState("");

  function getMonthFromString(mon) {
    return new Date(Date.parse(mon + "1")).getMonth() + 1;
  }

  let monthNumber = getMonthFromString(selectedMonth);
  if (monthNumber < 10) {
    monthNumber = `0${monthNumber}`;
  } else {
    monthNumber = `${monthNumber}`;
  }

  let selectedDayWithZero;
  if (selectedDay < 10) {
    selectedDayWithZero = `0${selectedDay}`;
  } else {
    selectedDayWithZero = `${selectedDay}`;
  }

  useEffect(() => {
    if (
      input === "" &&
      new Date(`${monthNumber}/${selectedDayWithZero}/${selectedYear}`).getDate() !== new Date(Date.now()).getDate()
    ) {
      setInput(`${monthNumber}/${selectedDayWithZero}/${selectedYear}`);
    }
    if (input !== "") {
      setInput(`${monthNumber}/${selectedDayWithZero}/${selectedYear}`);
    }
  }, [input, monthNumber, selectedDayWithZero, selectedYear]);

  // useEffect(() => {
  //   setSelected(input);
  // }, [setSelected, input]);

  const ref = useRef(null);
  const handleCLickOutside = (e) => {
    if (ref.current && openDropDown && !ref.current.contains(e.target)) {
      setOpenDropDown(false);
    }
  };

  document.addEventListener("mousedown", handleCLickOutside);

  return (
    <div>
      <label hmtlfor={id}>{title}</label>
      <div ref={ref} className={"picker-dropdownMenu"}>
        <div onClick={() => setOpenDropDown(true)}>
          <input id={id} readOnly type="text" value={input} />
        </div>

        <div className={openDropDown ? "picker-container" : "hidden"}>
          <CalendarHearder
            month={month}
            year={year}
            setSelectedDay={setSelectedDay}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            setInput={setInput}
            monthNumber={monthNumber}
            selectedDayWithZero={selectedDayWithZero}
          />
          <Calendar
            monthNumber={monthNumber}
            selectedYear={selectedYear}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setOpenDropDown={setOpenDropDown}
            setInput={setInput}
            selectedDayWithZero={selectedDayWithZero}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
