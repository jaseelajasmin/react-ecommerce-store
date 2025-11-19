import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../components/ProductSlice'
export const store=configureStore({
reducer:{
    products:productsReducer


}

})