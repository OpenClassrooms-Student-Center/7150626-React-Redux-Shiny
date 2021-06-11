import themeReducer from '../features/theme'
import surveyReducer from '../features/survey'
import freelanceReducer from '../features/freelance'
import resultsReducer from '../features/results'
import answersReducer from '../features/answers'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    theme: themeReducer,
    survey: surveyReducer,
    freelance: freelanceReducer,
    results: resultsReducer,
    answers: answersReducer,
  },
})
