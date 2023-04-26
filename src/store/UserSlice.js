import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PdfAPI, userAPI } from "../api/api";
import { setFulfilled, setPending, setRejected } from "../hooks/axiosStatus";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async function (params, { rejectWithValue }) {
    const {userId, token} = params
    try {
      const response = await userAPI.fetchUser(userId, token);
      if (response.status !== 200) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const putUser = createAsyncThunk('user/putUser', async function (props, { rejectWithValue }) {
	const { userId, firstName, lastName, patronymic, phoneNumber, birthday, address, token } = props
	try {
		const response = await userAPI.putUser(
			userId,
			firstName,
			lastName,
			patronymic,
			phoneNumber,
			birthday,
			address,
			token
		)
		console.log(response.data)
		if (response.status !== 200) {
			throw new Error()
		}
	} catch (error) {
		return rejectWithValue(error)
	}
})

export const fetchUserList = createAsyncThunk('user/fetchUserList', async function (token, { rejectWithValue }) {
	try {
		const response = await userAPI.fetchUserList(token)
		return response.data
	} catch (error) {
		return rejectWithValue(error)
	}
})

export const updateUser = createAsyncThunk('user/updateUser', async function ([id, token, data], { rejectWithValue }) {
	try {
		const response = await userAPI.updateUser(id, token, data)
		return response.data
	} catch (error) {
		return rejectWithValue(error)
	}
})

export const fetchPdfUser = createAsyncThunk(

  "employee/fetchPdfEmployee",
  async function ([data, token], { rejectWithValue }) {
    try {
      const response = await PdfAPI.fetchPdf(data, token);
      if (response.status === 200) {
            const downloadUrl = window.URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = `password.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove()
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const UserSlice = createSlice({
	name: 'user',
	initialState: {
		userList: [],
		// id: null,
		firstName: null,
		lastName: null,
		patronymic: null,
		phoneNumber: null,
		email: null,
		role: null,
		demo: false, //не хранить в localStorage
		externalId: 0,
		birthday: null,
		address: null,
		error: null,
		status: null,
		putStatus: null, //не хранить в localStorage
	},
	reducers: {
		clearUser: state => {
			state.firstName = null
			state.lastName = null
			state.patronymic = null
			state.phoneNumber = null
			state.email = null
			state.role = null
			state.demo = null
			state.externalId = 0
			state.birthday = null
			state.address = null
			state.status = null
			state.putStatus = null
		},

		clearUserStatus: state => {
			state.status = null
		},
		clearPutUserStatus: state => {
			state.putStatus = null
		},
	},
	extraReducers: {
		[fetchUser.pending]: state => {
			state.status = 'pending'
			state.isFetchSuccess = false
			state.error = null
		},
		[fetchUser.fulfilled]: (state, action) => {
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
			state.patronymic = action.payload.patronymic
			state.phoneNumber = action.payload.phoneNumber
			state.email = action.payload.email
			state.role = action.payload.role
			state.demo = action.payload.demo //не хранить в localStorage
			state.externalId = action.payload.externalId
			state.birthday = action.payload.birthday
			state.address = action.payload.address
			state.error = action.payload.error
			state.status = 'resolved'
			state.isFetchSuccess = true
		},
		[fetchUser.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
		[putUser.pending]: state => {
			state.putStatus = 'pending'
			state.error = null
		},
		[putUser.fulfilled]: state => {
			state.putStatus = 'resolved'
			state.error = null
		},
		[putUser.rejected]: (state, action) => {
			state.putStatus = 'rejected'
			state.error = action.payload
		},


    [fetchUserList.pending]: setPending,
    [fetchUserList.fulfilled]: (state, action) => {
      state.userList = action.payload;
      state.status = 'resolved'
    },
    [fetchUserList.rejected]: setRejected,
    [updateUser.pending]: setPending,
    [updateUser.fulfilled]: (state, action) => {
      state.userList = state.userList.map(user => user.id === action.payload.id ? user = action.payload : user)

    },
    [updateUser.rejected]: setRejected,
    [fetchPdfUser.pending]: setPending,
    [fetchPdfUser.fulfilled]: setFulfilled,
    [fetchPdfUser.rejected]: setRejected,
  },
});


export default UserSlice.reducer
export const { clearUser, clearIsFetchSuccess, clearUserStatus } = UserSlice.actions
