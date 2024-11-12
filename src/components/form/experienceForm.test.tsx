import '@testing-library/react'
import { render, screen, fireEvent } from "@testing-library/react";
import { ExperienceForm } from ".";

describe("ExperienceForm Component", () => {
    const mockClose = jest.fn();
    const mockAction = jest.fn();
    const mockValue = {
        title: "Developer",
        during: "2020-2022",
        technologies: ["React", "TypeScript"],
        descrip: "Developed multiple applications.",
        link: "https://github.com/example"
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("renders form with initial values", () => {
        render(<ExperienceForm close={mockClose} action={mockAction} value={[mockValue]} />);

        expect(screen.getByPlaceholderText("Título")).toHaveValue("Developer");
        expect(screen.getByPlaceholderText("Período de atuação")).toHaveValue("2020-2022");
        expect(screen.getByPlaceholderText("Habilidades (Separe-as por vírgula)")).toHaveValue("React, TypeScript");
        expect(screen.getByPlaceholderText("Descreva sua experiência")).toHaveValue("Developed multiple applications.");
        expect(screen.getByPlaceholderText("Link do repositório (Opcional)")).toHaveValue("https://github.com/example");
    });

    test("updates input values and submits form", () => {
        render(<ExperienceForm close={mockClose} action={mockAction} value={null} />);

        fireEvent.change(screen.getByPlaceholderText("Título"), { target: { value: "Tester" } });
        fireEvent.change(screen.getByPlaceholderText("Período de atuação"), { target: { value: "2023" } });
        fireEvent.change(screen.getByPlaceholderText("Habilidades (Separe-as por vírgula)"), { target: { value: "Jest, Testing Library" } });
        fireEvent.change(screen.getByPlaceholderText("Descreva sua experiência"), { target: { value: "Performed testing on multiple projects." } });
        fireEvent.change(screen.getByPlaceholderText("Link do repositório (Opcional)"), { target: { value: "https://github.com/test" } });

        fireEvent.click(screen.getByText("Salvar"));

        expect(mockAction).toHaveBeenCalledWith(
            JSON.stringify({
                title: "Tester",
                during: "2023",
                technologies: ["Jest", "Testing Library"],
                descrip: "Performed testing on multiple projects.",
                link: "https://github.com/test"
            })
        );
        expect(mockClose).toHaveBeenCalled();
    });

    test("disables save button if required fields are empty", () => {
        render(<ExperienceForm close={mockClose} action={mockAction} value={null} />);

        const saveButton = screen.getByText("Salvar") as HTMLButtonElement;
        expect(saveButton).toBeDisabled();

        fireEvent.change(screen.getByPlaceholderText("Título"), { target: { value: "Tester" } });
        fireEvent.change(screen.getByPlaceholderText("Período de atuação"), { target: { value: "2023" } });
        fireEvent.change(screen.getByPlaceholderText("Habilidades (Separe-as por vírgula)"), { target: { value: "Jest, Testing Library" } });
        fireEvent.change(screen.getByPlaceholderText("Descreva sua experiência"), { target: { value: "Testing description" } });

        expect(saveButton).not.toBeDisabled();
    });

    test("calls close function when cancel button is clicked", () => {
        render(<ExperienceForm close={mockClose} action={mockAction} value={null} />);

        fireEvent.click(screen.getByText("Cancelar"));

        expect(mockClose).toHaveBeenCalled();
    });
});
