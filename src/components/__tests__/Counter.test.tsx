import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter", () => {
  it("renders with initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });

  it("increments count when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });

  it("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(screen.getByText("Counter: -1")).toBeInTheDocument();
  });

  it("resets count to 0 when reset button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const resetButton = screen.getByText("Reset");

    // First increment to 1
    fireEvent.click(incrementButton);
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();

    // Then reset to 0
    fireEvent.click(resetButton);
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });
});
