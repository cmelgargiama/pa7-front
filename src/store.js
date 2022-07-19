import { configureStore } from "@reduxjs/toolkit"
import loginReducer from './reducers/loginSlice'

import { combineReducers } from "@reduxjs/toolkit"


const reducer = combineReducers({
 login: loginReducer
})



export const store = configureStore({
  reducer: reducer
})