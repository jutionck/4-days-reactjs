import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'
import Navigation from '../Navigation'

test('should render and update history', () => {

  const history = createMemoryHistory()

  render(
    <Router history={history}>
      <Navigation />
    </Router>
  );

  screen.debug();
})