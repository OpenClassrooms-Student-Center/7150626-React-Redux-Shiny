import themeReducer from '../features/theme'
import answersReducer from '../features/answers'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    theme: themeReducer,
    answers: answersReducer,
  },
})
