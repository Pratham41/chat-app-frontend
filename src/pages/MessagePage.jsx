import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client';
import { DataContext } from '../store/DataContext';


const socket = io('https://chat-app-backend-llrc.onrender.com');


const MessagePage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const { data, logOut } = useContext(DataContext);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
        return () => {
            socket.off('message');
        };
    }, [messages]);

    const handleMessageSend = () => {
        socket.emit('message', { input, data });
        setInput('');
    };

    return (
        <>
            <div className='mt-20 mb-4 flex justify-center items-center'>
                <h2 className='text-center  text-green-700 font-bold'>Welcome to MyChat App</h2>            
                <button className='ml-2 py-0.5 px-3 font-bold border text-red-800 rounded-lg border-red-500' onClick={() => logOut()}>Leave Chat</button>
            </div>

            <div className='flex flex-col items-center justify-between rounded-lg shadow-md mx-auto min-h-80 py-4 bg-gray-100 w-1/3'>
                <div className='flex flex-col w-full overflow-y-scroll'>
                    {messages.map((msg, index) => (
                        <div className='flex flex-col items-center w-full' key={index}>
                            <h4 className='text-center py-1 bg-white px-2 rounded text-green-500 font-semibold'>{msg.input}</h4>
                            <h6 className='text-xs text-blue-400 ml-24'>@{msg.data}</h6>
                        </div>
                    ))}
                </div>
                <div className='flex flex-row justify-center w-full'>
                    <input
                        type="text"
                        className='border border-green-200 font-semibold text-green-800 outline-none p-2 rounded-lg w-1/2'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        autoFocus
                        placeholder='type message here....'
                    />
                    <button className='ml-2 py-0.5 px-4 font-bold border text-green-800 rounded-lg border-green-500' onClick={handleMessageSend}>Send</button>
                </div>
            </div>
        </>
    )
}

export default MessagePage
