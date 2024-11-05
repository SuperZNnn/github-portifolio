import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './';

describe('Header Component', () => {
  test('should renders navigation links', () => {
    render(<Header />);

    expect(screen.getByText(/início/i)).toBeInTheDocument();
    expect(screen.getByText(/minha história/i)).toBeInTheDocument();
    expect(screen.getByText(/experiências/i)).toBeInTheDocument();
    expect(screen.getByText(/contato/i)).toBeInTheDocument();
  });

  test('should displays login button when not logged in', () => {
    render(<Header />);

    const loginButton = screen.getByAltText(/login/i);
    const loginText = screen.getByText(/entrar/i);

    expect(loginButton).toBeInTheDocument();
    expect(loginText).toBeInTheDocument();
  });

  test('should displays logout button when logged in', () => {
    render(<Header />);

    const setIsLogged = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [true, setIsLogged]);

    render(<Header />);

    const logoutText = screen.getByText(/sair/i);
    const profileImage = screen.getByAltText(/profile/i);

    expect(logoutText).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
  });
});
