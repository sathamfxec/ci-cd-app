import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('shows the app title and increments the counter', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})
