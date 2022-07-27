import { createSlice } from '@reduxjs/toolkit/dist'
import { createAsyncThunk } from '@reduxjs/toolkit/dist'
import loginService from './loginService'


const user = JSON.parse(localStorage.getItem('user')) 

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
      
      const session = await loginService.login(user)

      return session
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })

  export const logout = createAsyncThunk('auth/logout', async () => {
    return loginService.logout()
   })

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
          })
          .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
          }) 
          .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
          })
          .addCase(logout.pending, (state) => {
            state.isLoading = true
          })
          .addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = null
          })
          .addCase(logout.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = state.user
          })
    }
})



export const { reset } = loginSlice.actions
export default loginSlice.reducer