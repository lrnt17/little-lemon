import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  // Assuming "Book a Table" is the heading in BookingPage.js
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the form labels in BookingForm', () => {
  render(<BookingForm />);
  // Checking for static text in labels like "Choose date"
  const dateLabel = screen.getByText("Choose date");
  const timeLabel = screen.getByText("Choose time");
  const guestsLabel = screen.getByText("Number of guests");
  const occasionLabel = screen.getByText("Occasion");
  
  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(occasionLabel).toBeInTheDocument();
});
