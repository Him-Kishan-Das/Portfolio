import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero with name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Him Kishan Das/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
