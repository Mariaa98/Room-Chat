import React , {useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/infoBar';
import Input from '../Input/input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';




let socket;
const Chat = ({location}) =>{
    const [name,setName] = useState(''); // name is var and set is function i create it 
    const [room,setRoom] = useState('');
    const [users, setUsers] = useState('');

    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    const ENDPOINT =  'https://maria-discord-app.herokuapp.com/';


    useEffect(()=>{ 
        const {name,room} = queryString.parse(location.search); // it gives us a parmeter of name and room 

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room},()=>{
               
        });
        return()=>{
            socket.emit('disconnect');
            socket.off();
        }
        
    },[ENDPOINT,location.search]);
    
    useEffect(( ) => {
        socket.on("message", message => {
          setMessages(msgs => [...msgs, message]);
        });
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    },  [ ]);
    
    
    
    const sendMessage=(event)=>{
        event.preventDefault();
        if(message)
        {
            socket.emit('sendMessage',message,()=>setMessage(''));
        }
    }
    console.log(message,messages);
    return(
        <div className="outerContainer">
            <div className = "container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage}  sendMessage={sendMessage} />
            </div>
            <TextContainer users={users}/>
        </div>
    )
}

export default Chat;