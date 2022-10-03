import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{id: 0, text: "FirstMessage", author: 'BOT' }],
    },
    id2: {
        name: "Chat2",
        messages: [{id:0, text: "FirstMessageHereToo!", author: 'ME' }],
    },
};

const reducer = (state = initialChats, action) => {
    const chats = {...state}
    switch (action.type) {
        case 'ADD_CHAT':
            return {...state, [action.payload.id]: {name: action.payload.name, messages: []}}
        case 'DEL_CHAT':
            delete chats[action.payload]
            return chats
        case 'ADD_MESSAGE':
            const id = action.payload.id
            const message = action.payload.message
            chats[id].messages.push(message)
            return chats
        case 'DEL_MESSAGE':
            const chat = chats[action.payload.id]
            return {...state, [action.payload.id]: {
                name: chat.name,
                messages: chat.messages.filter((message) => message.id !== action.payload.messageId)}}
        default :
            return state
    }
}
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
