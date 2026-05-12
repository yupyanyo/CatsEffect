// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CatsEffect title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CatsEffect/i);
    expect(titleElement).toBeInTheDocument();
});
