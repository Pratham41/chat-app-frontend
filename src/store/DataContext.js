import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const saveData = newData => {
    localStorage.setItem('userData', JSON.stringify(newData));
    setData(newData);
  };

  const logOut = () => {
    localStorage.removeItem('userData');
    setData([]);
  };

  return (
    <DataContext.Provider value={{ data, saveData, logOut }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
