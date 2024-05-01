import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MainPage from '../ui/Page'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<MainPage />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})