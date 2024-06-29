import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero', () => {
  render(<App />);
  const hero = screen.getByTestId("hero");
  expect(hero).toBeInTheDocument()
});
