import {render, screen} from '@testing-library/react';
import App from '../App';

test('Acquisition should be on index page', () => {
    render(<App/>);
    const title = screen.getByText(/Acquisition/i);
    expect(title).toBeInTheDocument()
})
