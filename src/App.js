import './App.css';
import React, {useContext } from 'react';
import { DataContext } from './store/DataContext';
import MessagePage from './pages/MessagePage';
import Login from './pages/Login';



function App() {
  const { data } = useContext(DataContext);
  return (
    <div className="App">
    { data?.length ? <MessagePage/> : <Login />}
    </div>
  );
}

export default App;
