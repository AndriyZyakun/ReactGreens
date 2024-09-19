import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './reducers/categoryFilter';
import pizzaSlice from './reducers/pizzas';


export default configureStore({
    reducer: {
        categorySlice,
        pizzaSlice
    },
})