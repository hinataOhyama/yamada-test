import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';
import userEvent from '@testing-library/user-event';

test('textInput Component renders correctly', async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const textElement = screen.getByText('Enter text:');
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText('text-input');
  await user.type(inputElement, 'Hello, World!');
  expect(screen.getByText('Enter text: Hello, World!')).toBeInTheDocument();
});
