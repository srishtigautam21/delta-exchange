import "./App.css";
import MyTable from "./component/Table";
import Dropdown from "./component/Dropdown";

import { useState } from "react";
import Modal from "./component/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='App'>
      <div className='headerWrapper'>
        <div className='header'>Team Members</div>
        <button
          className='addMemberBtn'
          onClick={() => setOpenModal((open) => !open)}
        >
          + Add Members
        </button>
      </div>
      <div className='bottomBorder'></div>
      <Dropdown />
      <MyTable />
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
