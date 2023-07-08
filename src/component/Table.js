import React from "react";
import "./Table.css";
import { useData } from "../context/DataContext";
import { DeleteIcon } from "../Images/delete";

const MyTable = () => {
  const { myData, setMyData } = useData();
  console.log("vhjbjh", myData);
  // const [myData, setMyData] = useState([]);

  // useEffect(() => {

  //   const response = JSON.parse(JSON.stringify(data));
  //   console.log(response);
  //   setMyData(response);
  //   localStorage.setItem("tableData", JSON.stringify(data));

  // }, []);

  const deleteRow = (rowId) => {
    console.log(rowId, ...myData);
    setMyData([...myData?.filter((item, index) => index !== rowId)]);
  };
  // const handleCheckbox = (e) => {
  //   const { name, checked } = e.target;
  //   if (name === "allSelect") {
  //     let tempData = myData.map((item) => {
  //       return {
  //         ...item,
  //         isChecked: checked,
  //       };
  //     });
  //     setMyData(tempData);
  //   } else {
  //     let tempData = myData.map((item) =>
  //       item.company === name ? { ...item, isChecked: checked } : item
  //     );
  //     setMyData(tempData);
  //   }
  // };
  return (
    <div>
      {/* <div className='dropdown-wrapper'>
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
      </div> */}
      <table>
        {/* <input type='checkbox' /> */}
        <tr>
          <th>
            <input type='checkbox' />
          </th>
          <th>Name</th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
        </tr>
        {myData?.map((item, index) => {
          return (
            <>
              {/* <input type='checkbox' /> */}
              <tr key={index}>
                <td>
                  <input type='checkbox' />
                </td>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.status}</td>
                <td>{item.lastUpdated}</td>
                <td>{item.notes}</td>
                <td>
                  <button
                    className='deleteBtn'
                    onClick={() => deleteRow(index)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
              {/* <button onClick={() => deleteRow(index)}>delete</button> */}
            </>
          );
        })}
      </table>
    </div>
  );
};

export default MyTable;
