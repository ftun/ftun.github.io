import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUrlApi } from '../../helpers';

const name = "profile"

const initialState = {
    status: '',
    data: {},
    error: {},
};

export const fecthProfileData = createAsyncThunk(`${name}/fecthProfileData`, async () => {
    const response = await axios.get(`${getUrlApi()}/profile`);
    return response.data;
})

export const profileReducer = createSlice({
    name: name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fecthProfileData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fecthProfileData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error
        })
        .addCase(fecthProfileData.fulfilled, (state, action) => {
            state.status = 'successful';
            state.data = action.payload;
        })
    },
})

export default profileReducer.reducer;