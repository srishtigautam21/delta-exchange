import React from "react";
import { useData } from "../context/DataContext";
import { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const { myData, setMyData } = useData();
  const [open, setOpen] = useState(false);
  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempData = myData.map((item) => {
        return {
          ...item,
          isChecked: checked,
        };
      });
      setMyData(tempData);
    } else {
      let tempData = myData.map((item) =>
        item.company === name ? { ...item, isChecked: checked } : item
      );
      setMyData(tempData);
    }
  };
  const handleFilterTable = (e) => {
    const value = e.target.value;
    console.log(value);
    setMyData([...myData.filter((item) => item.status === value)]);
  };
  return (
    <div className='wrapper'>
      <div className='dropdown-wrapper'>
        <button className='dropdown' onClick={() => setOpen((open) => !open)}>
          Company
        </button>
        <div className='dropdown-content'>
          {open && (
            <>
              <label className='checkbox'>
                <input
                  style={{ paddingLeft: "10px" }}
                  type='checkbox'
                  name='allSelect'
                  checked={
                    myData.filter((item) => item?.isChecked !== true).length < 1
                  }
                  onChange={(e) => handleCheckbox(e)}
                />
                Select All
              </label>
              {myData.map((item, index) => {
                return (
                  <div className='checkbox'>
                    <input
                      type='checkbox'
                      id='dropdown-checkbox'
                      name={item.company}
                      onChange={(e) => handleCheckbox(e)}
                      checked={item?.isChecked || false}
                    />
                    <label
                      htmlFor='dropdown-checkbox'
                      style={{ paddingLeft: "10px" }}
                    >
                      {item.company}
                    </label>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <select onChange={(e) => handleFilterTable(e)}>
        {/* {myData.map((item, index) => {
          return  */}
        <option value=''>Status</option>
        <option value='Active'>Active</option>
        <option value='Closed'>Closed</option>
        {/* })} */}
      </select>
    </div>
  );
};

export default Dropdown;