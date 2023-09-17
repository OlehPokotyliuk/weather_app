import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherList(state,action){
      state.data = action.payload;
    }
  },
})


export const { weatherList } = weatherSlice.actions

export default weatherSlice.reducer