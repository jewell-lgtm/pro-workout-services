import { CurrentUser } from '@redwoodjs/auth'
import { render, waitFor, screen } from '@redwoodjs/testing/web'

import LoginPage from './LoginPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoginPage', () => {
  it('renders successfully', () => {
    expect(async () => {
      mockCurrentUser({ name: 'Rob' } as CurrentUser)
      render(<LoginPage />)
      await waitFor(() => {
        expect(screen.findByRole('tokendisplay123')).toBeInTheDocument()
      })
    }).not.toThrow()
  })
})

//
