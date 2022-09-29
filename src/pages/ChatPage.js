import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Chats} from "../messages";

const ChatPage = () => {
    const {id} = useParams()
    const findChat = (id) =>{
        const chat = chats.find((item) => {return item.id == id})
        return chat.messages;
    }
    const chats = Chats;
    const [messages, setMessages] = useState([...findChat(id)])
    return (
        <div>
            {messages.map((message)=>{
                return (
                    <div key={message.id}>
                        {message.author}: {message.text}
                    </div>
                )
            })}
        </div>
    );
};

export default ChatPage;