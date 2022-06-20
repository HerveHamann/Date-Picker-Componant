import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faHouse, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = ({
  type,
  setSelected,
  selectedItem
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const ref = useRef(null);

  const handleCLickOutside = e => {
    if (ref.current && openDropDown && !ref.current.contains(e.target)) {
      setOpenDropDown(false);
    }
  };

  document.addEventListener("mousedown", handleCLickOutside);

  const SaveSelection = item => {
    setSelected(item.name || item);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "picker-dropdown",
    onClick: () => openDropDown ? setOpenDropDown(false) : setOpenDropDown(true)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-select"
  }, /*#__PURE__*/React.createElement("span", {
    className: "select"
  }, selectedItem, " "), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faCaretDown
  })), /*#__PURE__*/React.createElement("div", {
    className: openDropDown ? "dropdown-list" : "hidden"
  }, type.map(item => /*#__PURE__*/React.createElement("div", {
    className: selectedItem === (item.name || item) ? "dropdown-item-focus" : "dropdown-item",
    onClick: () => SaveSelection(item),
    key: item.name || item
  }, item.name || item)))));
};

const CalendarHearder = ({
  month,
  year,
  setSelectedDay,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
  setInput,
  monthNumber,
  selectedDayWithZero
}) => {
  const OnClickPrevious = () => {
    if (selectedMonth !== month[0].name) {
      let itemName = month.find(item => item.name === selectedMonth);
      let itemIndex = month.indexOf(itemName);
      setSelectedMonth(month[itemIndex - 1].name);
    }

    if (selectedMonth === month[0].name) {
      setSelectedMonth(month[month.length - 1].name);
      let itemName = year.find(item => item === selectedYear);
      let itemIndex = year.indexOf(itemName);
      selectedYear !== year[0] ? setSelectedYear(year[itemIndex - 1]) : setSelectedYear(year[0]);
    }
  };

  const OnClickNext = () => {
    if (selectedMonth !== month[month.length - 1].name) {
      let itemName = month.find(item => item.name === selectedMonth);
      let itemIndex = month.indexOf(itemName);
      setSelectedMonth(month[itemIndex + 1].name);
    }

    if (selectedMonth === month[month.length - 1].name) {
      setSelectedMonth(month[0].name);
      let itemName = year.find(item => item === selectedYear);
      let itemIndex = year.indexOf(itemName);
      selectedYear !== year[year.length - 1] ? setSelectedYear(year[itemIndex + 1]) : setSelectedYear(year[year.length - 1]);
    }
  };

  const OnClickHouse = () => {
    setSelectedMonth(month[new Date(Date.now()).getMonth()].name);
    setSelectedYear(new Date(Date.now()).getFullYear());
    setSelectedDay(new Date(Date.now()).getDate());
    setInput(`${monthNumber}/${selectedDayWithZero}/${selectedYear}`);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "header-container"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "arrow",
    icon: faCaretLeft,
    onClick: () => {
      OnClickPrevious();
    }
  }), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "house",
    icon: faHouse,
    onClick: () => {
      OnClickHouse();
    }
  }), /*#__PURE__*/React.createElement(Select, {
    classSet: "picker-dropdown",
    type: month,
    selectedItem: selectedMonth,
    setSelected: setSelectedMonth
  }), /*#__PURE__*/React.createElement(Select, {
    classSet: "picker-dropdown",
    type: year,
    selectedItem: selectedYear,
    setSelected: setSelectedYear
  }), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "arrow",
    icon: faCaretRight,
    onClick: () => {
      OnClickNext();
    }
  }));
};

export default CalendarHearder;