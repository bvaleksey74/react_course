const ADD_CHAT = 'ADD_CHAT'
const DEL_CHAT = 'DEL_CHAT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const DEL_MESSAGE = 'DEL_MESSAGE'

const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{id: 0, text: "FirstMessage", author: 'BOT' }],
    },
    id2: {
        name: "Chat2",
        messages: [{id:0, text: "FirstMessageHereToo!", author: 'ME' }],
    }
};
export const reducer = (state = initialChats, action) => {
    const chats = {...state}
    switch (action.type) {
        case ADD_CHAT:
            return {...state, [Date.now()]: {name: action.payload, messages: []}}
        case DEL_CHAT:
            delete chats[action.payload]
            return chats
        case ADD_MESSAGE:
            const id = action.payload.id
            const message = action.payload.message
            chats[id].messages.push(message)
            return chats
        case DEL_MESSAGE:
            const chat = chats[action.payload.id]
            return {...state, [action.payload.id]: {
                    name: chat.name,
                    messages: chat.messages.filter((message) => message.id !== action.payload.messageId)}}
        default :
            return state
    }
}

export const addChatAction = (name) => ({type: ADD_CHAT, payload: name})
export const delChatAction = (payload) => ({type: DEL_CHAT, payload})
export const addMessageAction = (payload) => ({type: ADD_MESSAGE, payload})
export const delMessageAction = (payload, meta) => ({type: DEL_MESSAGE, payload, meta: meta})