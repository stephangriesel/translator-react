import {render, screen} from '@testing-library/react';
import Translate from './Translate';

test('translate button contains text', () => {
    render(<Translate />);
    const linkElement = screen.getByText(/translate/i);
    expect(linkElement).toBeInTheDocument();
  });
  