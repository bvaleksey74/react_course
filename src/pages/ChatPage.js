import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ChatPage = () => {
    const [author, setAuthor] = useState('')
    const [message, setMessage] = useState('')
    const {id} = useParams()
    const dispatch = useDispatch()
    const chatsList = useSelector(state => state)

    const addMessage = (id) => {
        dispatch({type: 'ADD_MESSAGE', payload: {id, message: {id: Date.now(), text: message, author: author}}})
    }
    const delMessage = (messageId) => {
        dispatch({type: 'DEL_MESSAGE', payload: {id: id, messageId}})
    }
    return (
        <div>
            {chatsList[id].messages.map(
                chat => {
                    return (
                        <div key={chat.id}>
                            {chat.author}: {chat.text}
                            <button onClick={() => {
                                delMessage(chat.id)
                            }}>x
                            </button>
                        </div>
                    )
                }
            )
            }
            <input placeholder={'author'} type="text" onChange={event => setAuthor(event.target.value)}/>
            <input placeholder={'message'} type="text" onChange={event => setMessage(event.target.value)}/>
            <button onClick={() => {
                addMessage(id)
            }}>Send
            </button>
        </div>
    );
};

export default ChatPage;