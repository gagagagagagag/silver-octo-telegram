import { screen, render } from '@testing-library/react'

import ShowError from '.'

describe('<ShowError />', () => {
  const setup = ({ message = 'testmessage' }: { message?: string }) => {
    render(<ShowError message={message} />)
  }

  it('should show the message to the user', () => {
    setup({})

    const errorAlert = screen.getByRole('alert', { name: /error/i })

    expect(errorAlert).toHaveTextContent('testmessage')
  })
})
