import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

var initialState = {
    address: '',
    name: "",
    email: "",
    totalPrice: 0,
    senderMessage: "",
    senderName: "",
    totalPrice: "",
    productsDetails: [],
};
export const order = createSlice({
    name: "order",
    initialState: initialState,
  
    reducers: {
        
        setAddress: (state, action) => {
            state.name = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        },
        setSenderMessage: (state, action) => {
            state.senderMessage = action.payload
        },
        setSenderName: (state, action) => {
            state.senderName = action.payload
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setProductsDetails: (state, action) => {
            console.log(action.payload)
            state.productsDetails = [...state.productsDetails, action.payload];
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});
  
export const {
    setAddress,
    setEmail,
    setName,
    setTotalPrice,
    setSenderMessage,
    setSenderName,
    setProductsDetails,
    setUserDetails,
} = order.actions;
  
export default order.reducer;