import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render button correctly", () => {
    render(<Button width="w-8/10" label="5%" colour="bg-verydarkCyan" />);
    expect(screen.getByText("5%")).toBeVisible();
  });

  it("calls setTipValue when clicked", () => {
    const setTipValue = vi.fn();
    const setCustomAmount = vi.fn();
    render(
      <Button
        width="w-8/10"
        label="5%"
        colour="bg-verydarkCyan"
        setTipValue={setTipValue}
        setCustomAmount={setCustomAmount}
        value={0.5}
      />,
    );
    const button = screen.getByText("5%");
    fireEvent.click(button);
    expect(setTipValue).toHaveBeenCalled();
  });

  it("calls the optional fn when it is passed in", () => {
    const fn = vi.fn();
    const setTipValue = vi.fn();
    render(
      <Button
        width="w-8/10"
        label="5%"
        colour="bg-verydarkCyan"
        setTipValue={setTipValue}
        value={5}
        fn={fn}
      />,
    );
    const button = screen.getByText("5%");
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should set the values to 0 when clicked", () => {
    const resetHandler = vi.fn();
    render(
      <Button
        width={"w-full"}
        label="RESET"
        colour="bg-strongCyan"
        hoverColour="bg-red-500"
        fn={resetHandler}
      />,
    );
    const button = screen.getByText("RESET");
    fireEvent.click(button);
    expect(resetHandler).toHaveBeenCalledTimes(1);
  });
});
