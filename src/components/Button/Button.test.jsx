import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render button correctly", () => {
    render(<Button width="w-8/10" label="5%" colour="bg-verydarkCyan" />);
    expect(screen.getByText("5%")).toBeVisible();
  });
  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button
        width="w-8/10"
        label="5%"
        colour="bg-verydarkCyan"
        onClick={handleClick}
      />,
    );
    const button = screen.getByText("5%");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
