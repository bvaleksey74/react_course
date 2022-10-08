import {createStore, applyMiddleware} from "redux";
import {reducer} from "./chatReducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";

const timeout = store => next => action => {

    const delay = action?.meta?.delayMs

    if(!delay) {
        return next(action)
    }
    const result = setTimeout(()=> next(action), delay)

    return () => {
        clearTimeout(result)
    }
}

const config = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(config, reducer)
export const store = createStore(persistedReducer, applyMiddleware(timeout))

export const persist = persistStore(store)