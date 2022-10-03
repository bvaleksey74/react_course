import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const ChatsPage = () => {
    const [chatName, setChatName] = useState('')
    const dispatch = useDispatch()
    const chatsList = useSelector(state => state)

    const addChat = () => {
        dispatch({type: 'ADD_CHAT', payload: {id: Date.now(), name: chatName}})
    }
    const delChat = (id) => {
        dispatch({type: 'DEL_CHAT', payload: id})
    }

    return (
        <div>
            Chats page
            <div>
                {
                    Object.keys(chatsList).map(
                        chat => {
                            return (
                                <div key={chat}>
                                    <Link to={chat}>{chatsList[chat].name}</Link>
                                    <button onClick={() => {delChat(chat)}}>x</button>
                                </div>
                            )
                        }
                    )
                }
                <input type="text" onChange={event => setChatName(event.target.value)}/>
                <button onClick={() => {
                    addChat()
                }}>create chat
                </button>
            </div>
        </div>
    );
};

export default ChatsPage;