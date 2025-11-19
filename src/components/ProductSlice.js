import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newProducts:[]
}
export const ProductSlice=createSlice({
    name:'products',
    initialState:initialState,
    reducers:{

       setNewProducts:(state,action) =>{

        state.newProducts=action.payload;
       },
     setOfferProducts:(state,action) =>{

        state.offerProducts=action.payload;
       },
       clearOfferProducts:(state) =>{

        state.offerProducts=[];
       },

    }
})
export const  {setNewProducts,setOfferProducts,clearOfferProducts}=ProductSlice.actions
export default ProductSlice.reducer;