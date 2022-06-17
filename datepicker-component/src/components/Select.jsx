import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = ({ classSet, title, type, setSelected, selectedItem }) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const ref = useRef(null);

  const handleCLickOutside = (e) => {
    if (ref.current && openDropDown && !ref.current.contains(e.target)) {
      setOpenDropDown(false);
    }
  };
  document.addEventListener("mousedown", handleCLickOutside);

  const SaveSelection = (item) => {
    setSelected(item.name || item);
  };

  return (
    <div>
      <div className={title ? "select-title" : ""}>{title}</div>
      <div
        ref={ref}
        className={classSet}
        onClick={() => (openDropDown ? setOpenDropDown(false) : setOpenDropDown(true))}>
        <div className="dropdown-select">
          <span className="select">{selectedItem} </span>
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </div>
        <div className={openDropDown ? "dropdown-list" : "hidden"}>
          {type.map((item) => (
            <div
              className={selectedItem === (item.name || item) ? "dropdown-item-focus" : "dropdown-item"}
              onClick={() => SaveSelection(item)}
              key={item.name || item}>
              {item.name || item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
