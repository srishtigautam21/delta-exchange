import React from "react";
import "./Table.css";
import { useData } from "../context/DataContext";
import { DeleteIcon } from "../Images/delete";

const MyTable = () => {
  const { myData, setMyData } = useData();
  const deleteRow = (rowId) => {
    setMyData([...myData?.filter((item, index) => index !== rowId)]);
  };

  return (
    <div>
      <table>
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
            </>
          );
        })}
      </table>
    </div>
  );
};

export default MyTable;
