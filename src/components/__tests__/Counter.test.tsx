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
});
