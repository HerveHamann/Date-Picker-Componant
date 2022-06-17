import React from "react";

const Calendar = ({
  monthNumber,
  selectedYear,
  selectedDay,
  setSelectedDay,
  setOpenDropDown,
  setInput,
  selectedDayWithZero,
}) => {
  const thirtyOneDay = ["01", "03", "05", "07", "08", "10", "12"];
  const thirtyDay = ["04", "06", "09", "11"];
  const february = ["02"];
  let numberOfDays;
  if (thirtyOneDay.find((item) => item === monthNumber)) {
    numberOfDays = 31;
  }
  if (thirtyDay.find((item) => item === monthNumber)) {
    numberOfDays = 30;
  }
  if (
    february.find(
      (item) => (item === monthNumber && 0 === selectedYear % 4 && 0 !== selectedYear % 100) || 0 === selectedYear % 400
    )
  ) {
    numberOfDays = 29;
  } else if (february.find((item) => item === monthNumber)) {
    numberOfDays = 28;
  }
  let ArrayOfNumberOfDays = [...Array(numberOfDays).keys()];

  let today = new Date(Date.now()).getDate();

  return (
    <div className="calendar-container">
      {ArrayOfNumberOfDays.map((days, index) => (
        <div
          className={
            days + 1 !== today && days + 1 !== selectedDay
              ? "calendar-day"
              : days + 1 === selectedDay
              ? "day-selected"
              : "calendar-today"
          }
          key={index}
          onClick={() => {
            setSelectedDay(days + 1);
            setOpenDropDown(false);
            if (days + 1 === new Date(Date.now()).getDate()) {
              setInput(`${monthNumber}/${selectedDayWithZero}/${selectedYear}`);
            }
          }}>
          <span>{days + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
