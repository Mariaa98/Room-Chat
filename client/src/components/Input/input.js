import React from 'react';
import './input.css';

const Input=({message,setMessage,sendMessage})=>(
    <form className="form">
        <input
        className="input"
        type="text"
        placeholder="type a message ..."
        value={message}
        onChange={(event)=>setMessage(event.target.value)}
        
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>

)

export default Input;