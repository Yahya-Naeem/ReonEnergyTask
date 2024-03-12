import { createSlice } from "@reduxjs/toolkit";

export const DataReducer = createSlice({
  name : "Data" ,
  initialState: {
        fakeData : {},
  },
  reducers: {
    addData: (state,action) => {
      state.fakeData = action.payload;
      console.log('Fake data setted as ',state.fakeData);
      return state;
    },
  }
});
export const { addData } = DataReducer.actions;

export default DataReducer.reducer;
