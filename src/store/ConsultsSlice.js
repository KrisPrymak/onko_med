import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { consultsAPI } from "../api/api";
import { setPending, setFulfilled, setRejected } from "../hooks/axiosStatus";

// fetchConsultItem, updateConsultItem, deleteConsultItem, fetchAllConsults, createConsultItem, fetchConsultsForUser
// {
//   [
//     id: 1,
//     linkEmployee: 'http',
//     linkUser: 'http',
//     startDate: 'iso',
//     held: 'http',
//     employeeId: 1,
//     userId: 1,
//   ]
// }

export const fetchConsultItem = createAsyncThunk(
  "consults/fetchConsultItem",
  async function ([consultId, token], { rejectWithValue }) {
    try {
      const response = await consultsAPI.fetchConsultItem(consultId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateConsultItem = createAsyncThunk(
  "consults/updateConsultItem",
  async function ([consultId, data, token], { rejectWithValue }) {
    try {
      const response = await consultsAPI.updateConsultItem(
        consultId,
        data,
        token
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteConsultItem = createAsyncThunk(
  "consults/deleteConsultItem",
  async function ([consultId, token], { rejectWithValue }) {
    try {
      const response = await consultsAPI.deleteConsultItem(consultId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllConsults = createAsyncThunk(
  "consults/fetchAllConsults",
  async function (token, { rejectWithValue }) {
    try {
      const response = await consultsAPI.fetchAllConsults(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createConsultItem = createAsyncThunk(
  "consults/createConsultItem",
  async function (data, { rejectWithValue }) {
    try {
      const response = await consultsAPI.createConsultItem(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchConsultsForUser = createAsyncThunk(
  "consults/fetchConsultsForUser",
  async function ([userId, token], { rejectWithValue }) {
    try {
      const response = await consultsAPI.fetchConsultsForUser(userId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ConsultsSlice = createSlice({
  name: "consults",
  initialState: {
    consultsList: [],
    consultItem: {},
    status: null,
    error: null,
    createStatus: null,
    createError: null,
  },
  reducers: {
    clearConsultItem(state) {
      state.consultItem = {}
    }
    // removeTelemedConsult(state, action) {
    //   state.telemedConsults = state.telemedConsults.filter(t => t.id !== action.payload.id)
    // }
  },
  extraReducers: {
    [fetchConsultsForUser.pending]: setPending,
    [fetchConsultsForUser.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.consultsList = action.payload;
    },
    [fetchConsultsForUser.rejected]: setRejected,

    [fetchConsultItem.pending]: setPending,
    [fetchConsultItem.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.consultItem = action.payload;
    },
    [fetchConsultItem.rejected]: setRejected,

    [updateConsultItem.pending]: setPending,
    [updateConsultItem.fulfilled]: setFulfilled,
    [updateConsultItem.rejected]: setRejected,

    [deleteConsultItem.pending]: setPending,
    [deleteConsultItem.fulfilled]: setFulfilled,
    [deleteConsultItem.rejected]: setRejected,

    [fetchAllConsults.pending]: setPending,
    [fetchAllConsults.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.consultsList = action.payload;
    },
    [fetchAllConsults.rejected]: setRejected,

    [createConsultItem.pending]: (state) => {
      state.createStatus = "pending";
      state.createError = null;
    },
    [createConsultItem.fulfilled]: (state) => {
      state.createStatus = "resolved";
    },
    [createConsultItem.rejected]: (state, action) => {
      state.createStatus = "rejected";
      state.createError = action.payload;
    },
  },
});

export const {clearConsultItem} = ConsultsSlice.actions;

export default ConsultsSlice.reducer;
