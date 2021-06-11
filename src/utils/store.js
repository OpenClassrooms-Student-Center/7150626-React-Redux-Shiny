import themeReducer from '../features/theme'
import surveyReducer from '../features/survey'
import answersReducer from '../features/answers'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    theme: themeReducer,
    survey: surveyReducer,
    answers: answersReducer,
  },
})
