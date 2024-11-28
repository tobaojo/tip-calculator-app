import { render, screen } from "@testing-library/react";
import Output from "./Output";

describe("Output component", () => {
  it("should render the output component correctly", () => {
    render(<Output />);
    const output = screen.getByText("Tip Amount");
    expect(output).toBeVisible();
  });

  it("should render the value of tip amount", () => {
    const calculateTipAndTotal = vi.fn();
    calculateTipAndTotal.mockReturnValue({
      tipAmountPerPerson: "5.00",
      totalBillPerPerson: "25.00",
    });
    render(<Output tipValue={0.25} bill={200} peopleInput={10} />);
    expect(screen.getByText("5.00")).toBeVisible();
  });

  it("should render the total value per person", () => {
    const calculateTipAndTotal = vi.fn();
    calculateTipAndTotal.mockReturnValue({
      tipAmountPerPerson: "5.00",
      totalBillPerPerson: "25.00",
    });
    render(<Output tipValue={0.25} bill={200} peopleInput={10} />);
    expect(screen.getByText("25.00")).toBeVisible();
  });
});
