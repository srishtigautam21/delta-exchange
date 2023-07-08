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
    if (flag !== true) {
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
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-content'>
          <div className='modal-header'>Add Members</div>
          {error !== "" && <div className='error'>{error}</div>}
          <label className='form-input'>
            Name
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={(e) => handleInputForm(e)}
              required
            />
          </label>
          <label className='form-input'>
            Company
            <input
              type='text'
              name='company'
              value={formData.company}
              onChange={(e) => handleInputForm(e)}
              required
            />
          </label>
          <label className='form-input'>
            Status
            <input
              type='text'
              name='status'
              value={formData.status}
              onChange={(e) => handleInputForm(e)}
              required
            />
          </label>
          <label className='form-input'>
            Notes
            <input
              type='text'
              name='notes'
              value={formData.notes}
              className='input-box'
              onChange={(e) => handleInputForm(e)}
              required
            />
          </label>
        </div>
        <button
          className='cross-btn'
          onClick={() => {
            setFormData({ name: "", company: "", status: "", notes: "" });
            setOpenModal(false);
          }}
        >
          X
        </button>
        <button
          onClick={() =>
            setFormData({ name: "", company: "", status: "", notes: "" })
          }
          className='modal-btn'
        >
          Cancel
        </button>
        <button onClick={() => handleNewMember()} className='modal-btn'>
          Save
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
