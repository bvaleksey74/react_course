import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ChatsPage = () => {
    const [chats, setChats] = useState(
        [
            {
                id: 1,
                name: 'main',
                messages: [{id: 0, author: 'Alex', text: 'hello'}]},
            {
                id: 2,
                name: 'flood',
                messages: [{id: 0, author: 'bot', text: 'hi all'}]}
        ]
    );
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