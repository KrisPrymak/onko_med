import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setFulfilled, setPending, setRejected } from "../hooks/axiosStatus";
import { newsAPI } from "../api/api";

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async function([isActual, token], {rejectWithValue}) {
        try {
            const response = await newsAPI.fetchNews(isActual, token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const postNewsItem = createAsyncThunk(
    'news/postNewsItem',
    async function([data, token], {rejectWithValue}) {
        try {
            const response = await newsAPI.postNewsItem(data, token)
            return response.data;
        } catch(error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteNewsItem = createAsyncThunk(
    'news/deleteNewsItem',
    async function([id, token], {rejectWithValue}) {
        try {
            const response = await newsAPI.deleteNewsItem(id, token)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const NewsSlice = createSlice({
  name: 'news',
  initialState: {
    newsList: [],
    status: null,
    error: null,
  },
  reducers: {
    clearNews: state => {
        state.newsList = []
        state.status = null
        state.error = null
    }
  },
  extraReducers: {
    [fetchNews.pending]: setPending,
    [fetchNews.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.newsList = action.payload;
    },
    [fetchNews.rejected]: setRejected,

    [postNewsItem.pending]: setPending,
    [postNewsItem.fulfilled]: setFulfilled,
    [postNewsItem.rejected]: setRejected,

    [deleteNewsItem.pending]: setPending,
    [deleteNewsItem.fulfilled]: setFulfilled,
    [deleteNewsItem.rejected]: setRejected,
  }
})
export const {clearNews} = NewsSlice.actions
export default NewsSlice.reducer;
