import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authAPI } from '../api/api'
import { setFulfilled, setPending, setRejected } from '../hooks/axiosStatus'

export const getToken = createAsyncThunk('auth/getToken', async function (props, { rejectWithValue }) {
	const { email, password } = props

	try {
		const response = await authAPI.login(email, password)
		if (response.status !== 200) {
			throw new Error()
		}
		return response.data
	} catch (error) {
		return rejectWithValue(error)
	}
})

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		role: null,
		id: null,
		token: null,
		status: null,
		error: null,
	},
	reducers: {
		logout: state => {
			state.error = null
			state.token = null
			state.role = null
			state.id = null
			state.status = null
			state.isSuccess = false
		},
		clearAuthStatus: state => {
			state.status = null
		}
	},
	extraReducers: {
		[getToken.pending]: setPending,
		[getToken.fulfilled]: (state, action) => {
			state.role = action.payload.role
			state.id = action.payload.id
			state.token = action.payload.token
			state.error = null
			state.status = 'resolved'
		},
		[getToken.rejected]: setRejected,
	},
	
})

export default authSlice.reducer
export const { logout, clearAuthStatus } = authSlice.actions

