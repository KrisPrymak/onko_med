import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { adminAPI } from '../api/api'

export const getAdminData = createAsyncThunk('admin/getAdminData', 
async function (token, { rejectWithValue }) {
	try {
		const response = await adminAPI.getAdminData(token)
		if (response.status !== 200) {
			throw new Error()
		}
		return response.data
	} catch (error) {
		return rejectWithValue(error)
	}
})

const adminSlice = createSlice({
	name: 'admin',
	initialState: {
		id: null,
		name: null,
		surname: null,
		patronymic: null,
		password: null,
		phoneNumber: null,
		email: null,
		externalId: null,
		birthday: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[getAdminData.pending]: () => {},
		[getAdminData.fulfilled]: (state, action) => {
			state.id = action.payload
			state.name = action.payload
			state.surname = action.payload
			state.patronymic = action.payload
			state.password = action.payload
			state.phoneNumber = action.payload
			state.email = action.payload
			state.externalId = action.payload
			state.birthday = action.payload
			state.error = action.payload
		},
	},
})

export default adminSlice.reducer
