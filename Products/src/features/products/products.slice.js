import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./products.api";

const productSlice=createSlice({
    name:"products",
    initialState:{items:[]},
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.items=action.payload
        })

    }

})
export const productReducer=productSlice.reducer