import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export function render(ui, options) {
  function Wrapper({ children }) {
    return <MemoryRouter {...options}>{children}</MemoryRouter>
  }
  rtlRender(ui, { wrapper: Wrapper })
}
