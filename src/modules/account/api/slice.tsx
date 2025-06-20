import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
name: "account",
initialState: {
  user: null,
 
  loading: false,
  error: null,
},
reducers: {
  setLoading: (state) => {
    state.loading = true;
  },
  setData: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.error = null;
  },
  setError: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
},

});
export const { setData, setError, setLoading } = accountSlice.actions;
export default accountSlice.reducer;