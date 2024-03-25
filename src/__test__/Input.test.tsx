import { render, screen } from "@testing-library/react";
import Input from "../components/UI/Input/Input";
import "@testing-library/jest-dom";

describe("Input component", () => {
  test("renders without errors", () => {
    render(<Input />);
    const inputElement = screen.getByLabelText("Input");
    expect(inputElement).toBeInTheDocument();
  });

  test("applies custom label correctly", () => {
    render(<Input label="Custom Label" />);
    const labelElement = screen.getByText("Custom Label");
    expect(labelElement).toBeInTheDocument();
  });

  test("applies custom value correctly", () => {
    render(<Input value="Custom Value" />);
    const inputElement = screen.getByDisplayValue("Custom Value");
    expect(inputElement).toBeInTheDocument();
  });
});
