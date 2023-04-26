import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setFulfilled, setPending, setRejected } from "../hooks/axiosStatus";
import { PdfAPI, employeeAPI } from "../api/api";

export const fetchDepartments = createAsyncThunk(
  "employee/fetchDepartments", 
  async function(token, {rejectWithValue}) {
    try {
      const response = await employeeAPI.fetchDepartments(token);
      return response.data;
    } catch(error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchPdfEmployee = createAsyncThunk(
  "employee/fetchPdfEmployee",
  async function ([data, token], { rejectWithValue }) {
    try {
      const response = await PdfAPI.fetchPdf(data, token);
      if (response.status === 200) {
            const downloadUrl = window.URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = `${data.login}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove()
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchEmployeeItem = createAsyncThunk(
  "employee/fetchEmployeeItem",
  async function ({id, token}, { rejectWithValue }) {
    try {
      const response = await employeeAPI.fetchEmployeeItem(id, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async function (token, { rejectWithValue }) {
    try {
      const response = await employeeAPI.fetchEmployees(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async function ([id, token], { rejectWithValue }) {
    try {
      const response = await employeeAPI.deleteEmployee(id, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postEmployee = createAsyncThunk(
  "employee/postEmployee",
  async function ([data, token], { rejectWithValue }) {
    try {
      const response = await employeeAPI.postEmployee(data, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const putEmployee = createAsyncThunk(
  "employee/putEmployee",
  async function ([id, data, token], { rejectWithValue }) {
    try {
      const response = await employeeAPI.putEmployee(id, data, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeList: [],
    employeeItem: {},
    departentsList: [],
    status: null,
    error: null,
    pdf: null,
  },
  reducers: {},
  extraReducers: {
    [fetchEmployees.pending]: setPending,
    [fetchEmployees.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.employeeList = action.payload;
    },
    [fetchEmployees.rejected]: setRejected,

    [deleteEmployee.pending]: setPending,
    [deleteEmployee.fulfilled]: setFulfilled,
    [deleteEmployee.rejected]: setRejected,

    [postEmployee.pending]: setPending,
    [postEmployee.fulfilled]: setFulfilled,
    [postEmployee.rejected]: setRejected,

    [putEmployee.pending]: setPending,
    [putEmployee.fulfilled]: setFulfilled,
    [putEmployee.rejected]: setRejected,

    [fetchPdfEmployee.pending]: setPending,
    [fetchPdfEmployee.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.pdf = action.payload;
    },
    [fetchPdfEmployee.rejected]: setRejected,
    [fetchDepartments.pending]: setPending,
    [fetchDepartments.fulfilled]: (state, action) => {
      state.departentsList = action.payload;
    },
    [fetchDepartments.rejected]: setRejected,

    [fetchEmployeeItem.pending]: setPending,
    [fetchEmployeeItem.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.employeeItem = action.payload;
    },
    [fetchEmployeeItem.rejected]: setRejected,
  },
});

// export const {} = employeeSlice.actions;

export default employeeSlice.reducer;
