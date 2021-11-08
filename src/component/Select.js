import React from "react";
import "./Select.css";

function Select({
  list = [],
  placeholder = "",
  selected = "",
  onChange = () => {},
  children = undefined,
  classNameSelecttext = "",
}) {
  return (
    <form className="formDes ">
      <select
        className={`selDesign ${classNameSelecttext}`}
        value={selected}
        onChange={onChange}
      >
        {!selected && (
          <option key={"namelist"} value={""}>
            {placeholder}
          </option>
        )}
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
        {children}
      </select>
    </form>
  );
}
export default Select;
