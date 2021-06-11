import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import themeReducer from '../../features/theme'
import answersReducer from '../../features/answers'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

export function render(ui, options) {
  const store = configureStore({
    reducer: {
      theme: themeReducer,
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
