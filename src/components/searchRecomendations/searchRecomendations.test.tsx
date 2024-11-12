import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import SearchRecomendations from ".";
import { getAllUsers } from "../../hooks/storeUsersData";

jest.mock("../../hooks/storeUsersData", () => ({
    getAllUsers: jest.fn(),
}));

describe("SearchRecomendations", () => {
    const mockComplete = jest.fn();

    beforeEach(() => {
        mockComplete.mockClear();
    });

    it("renders without crashing and shows no users initially", () => {
        (getAllUsers as jest.Mock).mockReturnValue([]);

        render(<SearchRecomendations complete={mockComplete} />);

        const usersList = screen.queryByRole("list");
        expect(usersList).not.toBeInTheDocument();
    });

    it("displays filtered users when search input is provided", () => {
        const mockUsers = [
            { name: "Almeida" },
            { name: "Carlão" },
            { name: "Cristovanio" },
        ];

        (getAllUsers as jest.Mock).mockReturnValue(mockUsers);

        render(<SearchRecomendations search="A" complete={mockComplete} />);

        const userElements = screen.getAllByText(/Almeida/);
        expect(userElements).toHaveLength(1);
    });

    it("calls complete function when a user is clicked", () => {
        const mockUsers = [
            { name: "Almeida" },
            { name: "Carlão" },
            { name: "Cristovanio" },
        ];

        (getAllUsers as jest.Mock).mockReturnValue(mockUsers);

        render(<SearchRecomendations search="A" complete={mockComplete} />);

        const AlmeidaUser = screen.getByText("Almeida");
        fireEvent.click(AlmeidaUser);

        expect(mockComplete).toHaveBeenCalledWith("Almeida");
    });
});