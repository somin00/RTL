import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Counter from "./components/Counter";

test("Component should render heading and increase, decrease button", () => {
  const { heading, increaseButton, decreaseButton } = setUp();
  expect(heading).toBeInTheDocument();
  expect(increaseButton).toBeInTheDocument();
  expect(decreaseButton).toBeInTheDocument();
});

test("Counter should render count:1 when increase button is clicked", () => {
  const { heading, increaseButton } = setUp();
  expect(heading).toHaveTextContent("count:0");

  userEvent.click(increaseButton);

  expect(heading).toHaveTextContent("count:1");
});

function setUp() {
  render(<Counter />);

  const heading = screen.getByRole("heading");
  const increaseButton = screen.getByText(/Increase/i);
  const decreaseButton = screen.getByText(/decrease/i);

  return { heading, increaseButton, decreaseButton };
}
