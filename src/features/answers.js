import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'answers',
  initialState: {},
  reducers: {
    saveAnswer: (draft, action) => {
      draft[action.payload.questionNumber] = action.payload.answer
    },
  },
})

export const { saveAnswer } = actions

export default reducer
