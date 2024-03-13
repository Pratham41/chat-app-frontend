import React, { useContext, useState } from 'react'
import { DataContext } from '../store/DataContext';

const Login = () => {
  const { saveData } = useContext(DataContext);
  const[userName,setUserName]=useState("")

  const handleSaveUsername = () => {
    saveData(userName)
  }

  return (
    <>
    <h2 className='text-center mt-20 mb-4 text-blue-500 font-bold'>You have to Join chat</h2>
    <div className='mx-auto flex flex-row justify-center border border-blue-200 rounded-lg px-4 py-10 w-1/2 '>
        <input placeholder='Enter your name' autoFocus className='border border-blue-200 text-blue-700 outline-none p-2 rounded-lg w-1/2' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button className='ml-2 border border-blue-400 font-semibold rounded-lg px-2 text-blue-400' onClick={handleSaveUsername}>Join chat</button>
    </div>
    </>
  )
}

export default Login
