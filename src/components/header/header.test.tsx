import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Header from "."
import axios from "axios"
import { signIn } from "../../hooks/useAuth"
import * as sessionHooks from "../../hooks/useSession"

jest.mock("../../hooks/useSession", () => ({
  ...jest.requireActual("../../hooks/useSession"),
  getSession: jest.fn(),
  clearSession: jest.fn(),
  setSession: jest.fn(),
}))

describe("Header component", () => {
  const updateUser = jest.fn()

  beforeEach(() => {
    sessionStorage.clear()
    localStorage.clear()
  })

  it("should render the 'Login' button if user is not logged in", () => {
    (sessionHooks.getSession as jest.Mock).mockReturnValue({ login: "" });

    render(<Header updateUser={updateUser} />)

    const loginButton = screen.getByText(/Entrar/i)
    expect(loginButton).toBeInTheDocument()
  })

  it("should call signIn when clicking the 'Login' button", async () => {
    (sessionHooks.getSession as jest.Mock).mockReturnValue({ login: "" });

    render(<Header updateUser={updateUser} />)

    const loginButton = screen.getByText(/Entrar/i)
    fireEvent.click(loginButton)

    await waitFor(() => expect(signIn).toHaveBeenCalled())
  })

  it("should render the 'Logout' button and user avatar if logged in", async () => {
    (sessionHooks.getSession as jest.Mock).mockReturnValue({ login: "testUser" });

    axios.get = jest.fn().mockResolvedValue({
      data: { avatar_url: "https://avatar.url" }
    })

    render(<Header updateUser={updateUser} />)

    await waitFor(() => {
      expect(screen.getByText(/Sair/i)).toBeInTheDocument()
      expect(screen.getByRole("img", { name: /Profile/i })).toHaveAttribute("src", "https://avatar.url")
    })
  })

  it("should call clearSession and updateUser when clicking 'Logout'", async () => {
    (sessionHooks.getSession as jest.Mock).mockReturnValue({ login: "testUser" });

    axios.get = jest.fn().mockResolvedValue({
      data: { avatar_url: "https://avatar.url" }
    })

    render(<Header updateUser={updateUser} />)

    await waitFor(() => fireEvent.click(screen.getByText(/Sair/i)))

    expect(sessionHooks.clearSession).toHaveBeenCalled()
    expect(updateUser).toHaveBeenCalled()
  })
})