import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { registrationAPI } from '../api/api'
import { setFulfilled, setPending, setRejected } from '../hooks/axiosStatus'

export const signUp = createAsyncThunk('auth/signUp', async function (email, { rejectWithValue }) {
	try {
		const response = await registrationAPI.signUp(email)
		if (response.status !== 200) {
			throw new Error()
		}
	} catch (error) {
		return rejectWithValue(error)
	}
})

export const RegSlice = createSlice({
	name: 'reg',
	initialState:{
		error: null,
		status: null,
	},
	reducers: {
		clearReg: state => {
			state.error = null
			state.status = null
		}
	},
	extraReducers: {
		[signUp.pending]: setPending,
		[signUp.fulfilled]: setFulfilled,
		[signUp.rejected]: setRejected,
	}
})

export default RegSlice.reducer
export const {clearReg} = RegSlice.actions
