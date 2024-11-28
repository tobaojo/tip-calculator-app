import { render, screen, fireEvent } from "@testing-library/react";
import TipSelector from "./TipSelector";

describe("Tip Selector component", () => {
  it("renders the Tip selector component correctly", () => {
    render(<TipSelector />);
    const tipSelector = screen.getByText("Select Tip %");
    expect(tipSelector).toBeVisible();
  });
});
