import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  knightPosition: [0, 0],
  observer: false,
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    moveKnight: (state, action) => {
      state.knightPosition = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { moveKnight } = boardSlice.actions;
export default boardSlice.reducer
