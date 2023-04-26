import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setPending, setRejected } from "../hooks/axiosStatus";
import { instance } from "../api/axios";
import { notificationAPI } from "../api/api";

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async function(token, {rejectWithValue}) {
        try {
            let response = await notificationAPI.fetchAllNotifications(token)
            return response.data;
        } catch(error) {
            return rejectWithValue(error.message)
        }
    }
)
export const fetchUserNotifications = createAsyncThunk(
    'notifications/fetchUserNotifications',
    async function([id, token], {rejectWithValue}) {
        try {
            let response = await notificationAPI.fetchUserNotifications(id, token)
            return response.data;
        } catch(error) {
            return rejectWithValue(error.message)
        }
    }
)

const NotificationSlice = createSlice({
    name: 'notifications',
    initialState: {
        notificationList: [],
        userNotifications: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchNotifications.pending]: setPending,
        [fetchNotifications.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.notificationList = action.payload;
        },
        [fetchNotifications.rejected]: setRejected,
        [fetchUserNotifications.pending]: setPending,
        [fetchUserNotifications.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.userNotifications = action.payload;
        },
        [fetchUserNotifications.rejected]: setRejected,
    }
})

export default NotificationSlice.reducer;