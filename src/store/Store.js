import thunk from 'redux-thunk'
import { reducerSearch } from '../reducer/Reducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
export default createStore(combineReducers({ reducerSearch }),
    applyMiddleware(thunk))