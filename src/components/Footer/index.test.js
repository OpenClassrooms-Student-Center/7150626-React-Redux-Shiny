import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Footer', () => {
  it.skip('Should render without crashing', async () => {
    render(<Footer />)
  })

  it.skip('Should change theme', async () => {
    render(<Footer />)
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
