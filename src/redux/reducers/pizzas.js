import { createSlice } from "@reduxjs/toolkit";

export const pizzaSlice = createSlice({
    name: 'pizzaSlice',
    initialState: {
        pizzas: []
    },
    reducers: {
        fetchPizzas: (state, action) => { state.pizzas = action.payload },
    }
});

export const { fetchPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;