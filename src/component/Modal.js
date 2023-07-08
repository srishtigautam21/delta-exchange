import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Modal.css";
import { useData } from "../context/DataContext";

const Modal = ({ openModal, setOpenModal }) => {
  const { formData, setFormData, myData, setMyData } = useData();
  const [error, setError] = useState("");
  const handleInputForm = (e) => {
    const value = e.target.value;
    console.log([e.target.name]);
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleNewMember = () => {
    let flag = false;
    for (let obj in formData) {
      if (formData[obj] === "") {
        flag = true;
        break;
      }
    }
    // console.log(
    //   "tyuikj",
    //   [formData].findIndex((item) => {
    //     console.log(item);
    //     return item === "";
    //   })
    // );
    // [formData].findIndex((item) => item === "") === -1

    // for (let obj in formData) {
    if (flag !== true) {
      // setMyData((prev, index) => ({ ...myData, [index]: formData }));
      // let newDate = new Date();
      // let date = newDate.getDate();
      // let month = newDate.getMonth() + 1;
      // let year = newDate.getFullYear();
      // let lastUpdatedDate = `${date}/${month}/${year}`;
      // console.log(lastUpdatedDate, new Date().toLocaleString() + "/");
      // console.log(
      //   new Date().toLocaleString([], {
      //     year: "numeric",
      //     month: "numeric",
      //     day: "numeric",
      //   })
      // );
      setMyData([
        ...myData,
        {
          ...formData,
          lastUpdated: new Date().toLocaleString([], {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
        },
      ]);
      setFormData({ name: "", company: "", status: "", notes: "" });
      setOpenModal(false);
    } else {
      setError("All fields are mandatory");
    }
    // }
    console.log("bcjsdd", myData);
  };
  if (!openModal) return null;
  return ReactDom.createPortal(
    // onClick={(e) => setOpenModal(false)}
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-content'>
          <div>Add Members</div>
          {error !== "" && <div>{error}</div>}
          <label>
            Name
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={(e) => handleInputForm(e)}
              required
            />
          </label>
          <label>
            Company
            <input
              type='text'
              name='company'
              value={formData.company}
              onChange={(e) => handleInputForm(e)}
              required
            />
          </label>
          <label>
            Status
            <input
              type='text'
              name='status'
              value={formData.status}
              onChange={(e) => handleInputForm(e)}
              required
            />
          </label>
          <label>
            Notes
            <input
              type='text'
              name='notes'
              value={formData.notes}
              onChange={(e) => handleInputForm(e)}
              required
            />
          </label>
        </div>
        <button className='cross-btn' onClick={() => setOpenModal(false)}>
          X
        </button>
        <button
          onClick={() =>
            setFormData({ name: "", company: "", status: "", notes: "" })
          }
        >
          Cancel
        </button>
        <button onClick={() => handleNewMember()}>Save</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
