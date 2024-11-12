import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import ExperiencesCard from ".";

const mockSetCardFormState = jest.fn();
const mockDel = jest.fn();

describe("ExperiencesCard", () => {
  it("should render the title, during, technologies, and description correctly", () => {
    const props = {
      title: "Almeidão",
      during: "Jan 2020 - Atual",
      technologies: ["React", "Node.js", "TypeScript"],
      description: "AAAAAAAAAA",
      editMode: false,
      setCardFormState: mockSetCardFormState,
      del: mockDel,
    };

    render(<ExperiencesCard {...props} />);

    expect(screen.getByText("Almeidão")).toBeInTheDocument();
    expect(screen.getByText("Jan 2020 - Atual")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("AAAAAAAAAA")).toBeInTheDocument();
  });

  it("should display edit and delete options when editMode is true", () => {
    const props = {
      title: "Almeidão",
      during: "Jan 2020 - Atual",
      technologies: ["React", "Node.js", "TypeScript"],
      description: "AAAAAAAAAA",
      editMode: true,
      setCardFormState: mockSetCardFormState,
      del: mockDel,
    };

    render(<ExperiencesCard {...props} />);

    expect(screen.getByAltText("Editar")).toBeInTheDocument();
    expect(screen.getByAltText("Deletar")).toBeInTheDocument();
  });

  it("should call setCardFormState when the card is clicked", () => {
    const props = {
      title: "Almeidão",
      during: "Jan 2020 - Atual",
      technologies: ["React", "Node.js", "TypeScript"],
      description: "AAAAAAAAAA",
      editMode: false,
      setCardFormState: mockSetCardFormState,
      del: mockDel,
    };

    render(<ExperiencesCard {...props} />);

    const cardContainer = screen.getByText("Adicionar Card").closest("div");
    fireEvent.click(cardContainer!);

    expect(mockSetCardFormState).toHaveBeenCalledTimes(1);
  });

  it("should call del when the delete button is clicked", () => {
    const props = {
      title: "Almeidão",
      during: "Jan 2020 - Atual",
      technologies: ["React", "Node.js", "TypeScript"],
      description: "AAAAAAAAAA",
      editMode: true,
      setCardFormState: mockSetCardFormState,
      del: mockDel,
    };

    render(<ExperiencesCard {...props} />);

    const deleteButton = screen.getByAltText("Deletar").closest("div");
    fireEvent.click(deleteButton!);

    expect(mockDel).toHaveBeenCalledTimes(1);
  });

  it("should render a link button if a link is provided", () => {
    const props = {
      title: "Almeidão",
      during: "Jan 2020 - Atual",
      technologies: ["React", "Node.js", "TypeScript"],
      description: "AAAAAAAAAA",
      link: "https://github.com/example/repo",
      editMode: false,
      setCardFormState: mockSetCardFormState,
      del: mockDel,
    };

    render(<ExperiencesCard {...props} />);

    const button = screen.getByText("Ver repositório");
    expect(button).toBeInTheDocument();
    expect(button.closest("a")).toHaveAttribute("href", "https://github.com/example/repo");
  });
});
