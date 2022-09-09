import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    isSuccess: (state, action) => {
      state.isLoading = false;
      state.data = [...action.payload];
    },
    isFailure: (state) => {
      state.isLoading = false;
      state.errors = true;
    },
    AddUser: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { isLoading, isSuccess, isFailure, AddUser } = dataSlice.actions;

export const getData = () => (dispatch) => {
  dispatch(isLoading());
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((res) => {
      dispatch(isSuccess(res));
    })
    .catch((res) => {
      dispatch(isFailure());
    });
};

export default dataSlice.reducer;
