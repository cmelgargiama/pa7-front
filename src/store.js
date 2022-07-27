import { configureStore } from "@reduxjs/toolkit"
import loginReducer from './reducers/Login/loginSlice'
import gerentesReducer from './reducers/Gerentes/gerentesSlice'

import { combineReducers } from "@reduxjs/toolkit"


const reducer = combineReducers({
 login: loginReducer,
 gerentes: gerentesReducer
})



export const store = configureStore({
  reducer: reducer
})