import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setPending, setRejected } from '../hooks/axiosStatus'
import { instance } from '../api/axios'

export const fetchMedicalCareList = createAsyncThunk(
	'medicalCare/fetchMedicalCareList',
	async function (props, { rejectWithValue }) {
		let extraParams = ''
		const { request, token } = props
		if (request.paid) {
			if (request.like) {
				extraParams = `?${request.paid}&like=${request.like}`
			}
			extraParams = `?${request.paid}`
		} else if (request.like) {
			extraParams = `?like=${request.like}`
		}
		try {
			const response = await instance.get(`/api/v1/medical-services${extraParams}`, {
				headers: {
					Authorization: token,
				},
			})
			return response.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const medicalCareSlice = createSlice({
	name: 'medicalCare',
	initialState: {
		medicalCare: [],
		status: null,
		error: null,
	},
	reducers: {
		filterMedicalCares: (state, action) => {
			state.medicalCare = action.payload
		},
	},
	extraReducers: {
		[fetchMedicalCareList.pending]: setPending,
		[fetchMedicalCareList.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.medicalCare = action.payload
		},
		[fetchMedicalCareList.rejected]: setRejected,
	},
})

export const { filterMedicalCares } = medicalCareSlice.actions

export default medicalCareSlice.reducer
