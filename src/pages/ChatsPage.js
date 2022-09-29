import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Chats} from "../messages";

const ChatsPage = () => {
    const [chats, setChats] = useState(Chats);
    const [chatName, setChatName] = useState('');
    const handleDelete = (id) => {
        const filteredChats = chats.filter((chat) => chat.id !== id)
        setChats(filteredChats)
    }
    const handleAdd = () =>{
        setChats(prevState => [...prevState, {id: Date.now(), name: chatName, messages: ''}])
    }
    return (
        <div>
            Chats page
            <div>
                {chats.map(
                    (chat) => {
                        return (
                            <div key={chat.id}>
                                <Link to={`${chat.id}`}>{chat.name}</Link>
                                <button onClick={() => handleDelete(chat.id)}>X</button>
                            </div>
                        )
                    }
                )}
                <input type="text" onChange={event => setChatName(event.target.value)}/>
                <button onClick={handleAdd}>create chat</button>
            </div>
        </div>
    );
};

export default ChatsPage;