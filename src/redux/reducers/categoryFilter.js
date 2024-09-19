import { createSlice } from "@reduxjs/toolkit";

export const categoryFilter = createSlice({
    name: 'categoryFilter',
    initialState: {
        activeCategory: null
    },
    reducers: {
        selectCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    }
});

export const { selectCategory } = categoryFilter.actions;
export default categoryFilter.reducer;