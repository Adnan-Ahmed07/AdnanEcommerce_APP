import { createSlice } from "@reduxjs/toolkit"

export const categoriesSlice =createSlice ({ 
name: "categories",
initialState:{  
  data:null,
  loading: false,
  error: null,
},
reducers:{ 
  setData: (state, action) => {
  state.loading = false;
    state.data = action.payload;
    state.error = null;
  },
  setLoading: (state) => {
    state.loading = true
  },
  setError: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
}
})
export const { setData, setLoading, setError } = categoriesSlice.actions;
export default categoriesSlice.reducer;