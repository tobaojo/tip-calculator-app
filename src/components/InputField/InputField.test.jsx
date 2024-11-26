import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";
import DollarIcon from "../DollarIcon/DollarIcon";

describe("input field", () => {
  it("renders the input component correctly", () => {
    render(<InputField formLabel={"Bill"} icon={<DollarIcon />} />);
    const inputField = screen.getByLabelText("Bill");
    expect(inputField).toBeVisible();
  });

  it("renders the input component with the correct attributes", () => {
    render(<InputField value="0" onChange={() => {}} />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("name", "bill");
    expect(input).toHaveAttribute("id", "bill");
  });

  //   it("renders the input with the optional icon if provided", () => {
  //     render(
  //       <InputField
  //         formLabel="Bill"
  //         value="0"
  //         onChange={() => {}}
  //         icon={<DollarIcon />}
  //       />,
  //     );
  //     expect(screen.getByTestId("icon")).toBeInTheDocument();
  //   });

  it("allows user input", () => {
    const handleChange = vi.fn();
    render(
      <InputField
        formLabel={"Bill"}
        icon={<DollarIcon />}
        onChange={handleChange}
      />,
    );
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 0 } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
