import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home page', () => {
    it('renders the heading', () => {
        render(<Home />);
        expect(screen.getByText('InvestAI Dashboard')).toBeInTheDocument();
    });
});