import { render as rtlRender } from '@testing-library/react'
import { SurveyProvider } from '../../utils/context'
import { MemoryRouter } from 'react-router-dom'

export function render(ui, options) {
  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}>
        <SurveyProvider>{children}</SurveyProvider>
      </MemoryRouter>
    )
  }
  rtlRender(ui, { wrapper: Wrapper })
}
