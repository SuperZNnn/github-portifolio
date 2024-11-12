import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '.';
import { getAllUsers } from '../../hooks/storeUsersData';
import { signIn } from '../../hooks/useAuth';
import { setSession } from '../../hooks/useSession';

// Mock the getAllUsers function
jest.mock('../../hooks/storeUsersData', () => ({
  getAllUsers: jest.fn(),
}));

describe('HomePage', () => {

  it('should render the page elements correctly', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Digite o nome do usuário que deseja bucar/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite o nome do usuário/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Avançar/i)).toBeInTheDocument();
    expect(screen.getByText(/OU/i)).toBeInTheDocument();
    expect(screen.getByText(/Acesse sua conta com/i)).toBeInTheDocument();
    expect(screen.getByAltText(/GitHub/i)).toBeInTheDocument();
  });

  it('should show search recommendations when input is focused', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    fireEvent.focus(screen.getByPlaceholderText(/Digite o nome do usuário/i));

    await waitFor(() => {
      expect(screen.getByText(/search/i)).toBeInTheDocument(); // Assuming search results appear with the text "search"
    });
  });

  it('should hide search recommendations when input loses focus', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    fireEvent.focus(screen.getByPlaceholderText(/Digite o nome do usuário/i));
    fireEvent.blur(screen.getByPlaceholderText(/Digite o nome do usuário/i));

    await waitFor(() => {
      expect(screen.queryByText(/search/i)).not.toBeInTheDocument();
    });
  });

  it('should navigate to user profile when user is found', () => {
    // Mock the return value of getAllUsers to simulate a real response
    (getAllUsers as jest.Mock).mockReturnValue([{ name: 'john' }]);

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/Digite o nome do usuário/i);
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'john' } });
    fireEvent.click(button);

    // Simulate navigation
    expect(window.location.pathname).toBe('/profile/john');
  });

  it('should show error message when user is not found', () => {
    // Mock the return value of getAllUsers to simulate no user found
    (getAllUsers as jest.Mock).mockReturnValue([{ name: 'john' }]);

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/Digite o nome do usuário/i);
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'notFoundUser' } });
    fireEvent.click(button);

    expect(screen.getByText(/O nome que você digitou não existe ou não está cadastrado/i)).toBeInTheDocument();
  });

  it('should call signIn and navigate on GitHub login', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const githubButton = screen.getByRole('button');

    fireEvent.click(githubButton);

    // Simulate the callback call for signIn
    const callback = (signIn as any).mock.calls[0][0].callback;
    callback('githubUser'); // Manually triggering the callback

    expect(setSession).toHaveBeenCalledWith('githubUser');
    expect(window.location.pathname).toBe('/profile/githubUser');
  });
});
