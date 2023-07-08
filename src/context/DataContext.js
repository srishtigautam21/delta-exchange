import { useContext, createContext } from "react";
import data from "../data.json";

import { useState, useEffect } from "react";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    status: "",
    notes: "",
  });

  useEffect(() => {
    const response = JSON.parse(JSON.stringify(data));
    console.log(response);
    setMyData(response);
    localStorage.setItem("tableData", JSON.stringify(data));
  }, []);
  return (
    <DataContext.Provider value={{ myData, setMyData, formData, setFormData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };
