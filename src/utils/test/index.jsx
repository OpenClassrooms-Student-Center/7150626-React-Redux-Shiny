import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import themeReducer from '../../features/theme'
import answersReducer from '../../features/answers'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

export function render(ui, options) {
  const queryClient = new QueryClient()

  const store = configureStore({
    reducer: {
      theme: themeReducer,
      answers: answersReducer,
    },
  })

  function Wrapper({ children }) {
    return (
      // on utilise le QueryClientProvider pour que useQuery fonctionne dans les tests !
      <QueryClientProvider client={queryClient}>
        <MemoryRouter {...options}>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      </QueryClientProvider>
    )
  }
  rtlRender(ui, { wrapper: Wrapper })
}
