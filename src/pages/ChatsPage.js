import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addChatAction, delChatAction} from "../store/chatReducer";


const ChatsPage = () => {
    const [chatName, setChatName] = useState('')
    const dispatch = useDispatch()
    const chatsList = useSelector(state => state)

    const addChat = () => {
        dispatch(addChatAction(chatName))
    }
    const delChat = (id) => {
        dispatch(delChatAction(id))
    }

    return (
        <div>
            Chats page
            <div>
                {
                    Object.keys(chatsList).map(
                        chat => {
                            console.log(chat)
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