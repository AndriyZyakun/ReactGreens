import { createSlice } from "@reduxjs/toolkit";

export const sortOrderSlice = createSlice({
    name: 'sortOrderSlice',
    initialState: {
        activeItem: 0
    },
    reducers: {
        changeOrder: (state, action) => { state.activeItem = action.payload }
    }
});

export const { changeOrder } = sortOrderSlice.actions;
export default sortOrderSlice.reducer;