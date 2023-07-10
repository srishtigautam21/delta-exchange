import React from "react";
import { useData } from "../context/DataContext";
import { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const { myData, setMyData } = useData();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

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
      setCount(tempData.filter((item) => item.isChecked === true).length);
    } else {
      let tempData = myData.map((item) => {
        if (item.company === name) {
          return { ...item, isChecked: checked };
        } else {
          return item;
        }
      });
      setCount(tempData.filter((item) => item.isChecked === true).length);
      setMyData(tempData);
    }
  };
  const handleFilterTable = (e) => {
    const value = e.target.value;
    setMyData([...myData.filter((item) => item.status === value)]);
  };
  return (
    <div className='wrapper'>
      <div className='dropdown-wrapper'>
        <button className='dropdown' onClick={() => setOpen((open) => !open)}>
          Company({count})
        </button>
        <div className='dropdown-content'>
          {open && (
            <>
              <label className='checkbox-label'>
                <input
                  style={{ paddingLeft: "10px" }}
                  type='checkbox'
                  name='allSelect'
                  checked={
                    myData.filter((item) => item?.isChecked !== true).length < 1
                  }
                  onChange={(e) => {
                    handleCheckbox(e);
                  }}
                />
                <div style={{ paddingLeft: "10px" }}>Select All</div>
              </label>
              {myData.map((item, index) => {
                return (
                  <label className='checkbox-label'>
                    <input
                      type='checkbox'
                      id='dropdown-checkbox'
                      name={item.company}
                      onChange={(e) => {
                        handleCheckbox(e);
                      }}
                      checked={item?.isChecked || false}
                    />
                    <div
                      htmlFor='dropdown-checkbox'
                      style={{ paddingLeft: "10px" }}
                    >
                      {item.company}
                    </div>
                  </label>
                );
              })}
            </>
          )}
        </div>
      </div>
      <select onChange={(e) => handleFilterTable(e)}>
        <option value=''>Status</option>
        <option value='Active'>Active</option>
        <option value='Closed'>Closed</option>
      </select>
    </div>
  );
};

export default Dropdown;
