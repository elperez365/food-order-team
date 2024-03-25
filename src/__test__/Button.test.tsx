import { render, fireEvent } from "@testing-library/react";
import Button from "../components/UI/Button";
import "@testing-library/jest-dom";
describe("Button component", () => {
  test("renders button with correct text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button text={buttonText} style="classic" />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button text="Click me" style="classic" onClick={onClickMock} />,
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  // Add more tests here if needed
});
