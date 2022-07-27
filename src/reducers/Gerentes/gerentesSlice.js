import { createSlice } from '@reduxjs/toolkit/dist'
import { createAsyncThunk } from '@reduxjs/toolkit/dist'
import gerentesService from './gerentesService'


const initialState = {
    gerentes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getGerentes = createAsyncThunk('gerentes', async (thunkAPI) => {
    try {
      
      const data = await gerentesService.getGerentes()

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })



export const gerentesSlice = createSlice({
    name: 'gerentes',
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
        .addCase(getGerentes.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getGerentes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.gerentes = action.payload
          }) 
          .addCase(getGerentes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.gerentes = null
          })
        }


})

export const { reset } = gerentesSlice.actions
export default gerentesSlice.reducer