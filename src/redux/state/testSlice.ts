import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface StateType{
  value: number
}

const initialState: StateType={
  value:0
}

export const testSlice = createSlice({
  name : 'test',
  initialState:initialState,
  reducers:{
    increase(state){
      state.value += 1;
    },
    decrease(state){
      state.value -= 1;
    },
  }
});

export const {increase, decrease} = testSlice.actions;

export default  testSlice.reducer