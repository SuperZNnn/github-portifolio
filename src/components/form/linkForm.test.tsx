import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LinkForm } from '.';

describe('LinkForm Component', () => {
    const closeMock = jest.fn();
    const actionMock = jest.fn();

    beforeEach(() => {
        closeMock.mockClear();
        actionMock.mockClear();
    });

    it('renders the form correctly', () => {
        render(<LinkForm close={closeMock} action={actionMock} />);

        expect(screen.getByPlaceholderText('Digite a URL')).toBeInTheDocument();
        expect(screen.getByText('Adicionar Link')).toBeInTheDocument();
    });

    it('allows user to type in the input', () => {
        render(<LinkForm close={closeMock} action={actionMock} />);

        const input = screen.getByPlaceholderText('Digite a URL');
        fireEvent.change(input, { target: { value: 'https://example.com' } });
        expect(input).toHaveValue('https://example.com');
    });

    it('submits the form and calls action with the correct link', async () => {
        render(<LinkForm close={closeMock} action={actionMock} />);

        fireEvent.change(screen.getByPlaceholderText('Digite a URL'), { target: { value: 'https://example.com' } });
        fireEvent.click(screen.getByText('Salvar'));

        await waitFor(() => expect(actionMock).toHaveBeenCalledWith('https://example.com'));
        await waitFor(() => expect(closeMock).toHaveBeenCalled());
    });

    it('calls close function on cancel button click', () => {
        render(<LinkForm close={closeMock} action={actionMock} />);

        fireEvent.click(screen.getByText('Cancelar'));
        expect(closeMock).toHaveBeenCalled();
    });
});
