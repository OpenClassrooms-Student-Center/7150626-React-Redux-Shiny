import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import themeReducer from '../../features/theme'
import freelancesReducer from '../../features/freelances'
import surveyReducer from '../../features/survey'
import freelanceReducer from '../../features/freelance'
import resultsReducer from '../../features/results'
import answersReducer from '../../features/answers'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

export function render(ui, options) {
  const store = configureStore({
    reducer: {
      theme: themeReducer,
      freelances: freelancesReducer,
      survey: surveyReducer,
      freelance: freelanceReducer,
      results: resultsReducer,
      answers: answersReducer,
    },
  })

  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    )
  }
  rtlRender(ui, { wrapper: Wrapper })
}
