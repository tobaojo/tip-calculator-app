import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";
import DollarIcon from "../DollarIcon/DollarIcon";

describe("input field", () => {
  const TestWrapper = () => {
    const [value, setValue] = useState("");
    return (
      <InputField
        formLabel="Bill"
        icon={<DollarIcon />}
        value={value}
        setValue={setValue}
      />
    );
  };

  it("renders the input component correctly", () => {
    render(<InputField formLabel={"Bill"} icon={<DollarIcon />} />);
    const inputField = screen.getByLabelText("Bill");
    expect(inputField).toBeVisible();
  });

  it("renders the input component with the correct attributes", () => {
    render(<InputField value="0" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "bill");
    expect(input).toHaveAttribute("id", "bill");
  });

  it("allows user input", () => {
    render(<TestWrapper />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "123.45" } });
    expect(input).toHaveValue("123.45");
  });

  it("does not allow letters to be input", () => {
    render(<TestWrapper />);
    const input = screen.getByRole("textbox");
    fireEvent.change = (input, { target: { value: "abc" } });
    expect(input).toHaveValue("");
  });
});
