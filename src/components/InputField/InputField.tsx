import React, { ReactNode } from "react";

type InputFieldProps = {
  formLabel: string;
  icon?: ReactNode;
  value: number | string;
  setValue: React.Dispatch<React.SetStateAction<number | string>>;
};

const InputField = ({ formLabel, icon, value, setValue }: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9.+\-*/]*$/.test(value) || isNaN(parseFloat(value))) {
      setValue(parseFloat(e.target.value) || "");
    }
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="bill"
        className="relative font-bold text-darkGrayishCyan p-1"
      >
        {formLabel}
        {value === 0 ? (
          <span className="absolute text-red-500 right-1">Can't be zero</span>
        ) : (
          ""
        )}
      </label>
      <div className="relative w-full flex">
        <div className="absolute my-auto justify-center self-center left-3">
          {icon}
        </div>
        <input
          type="text"
          name="bill"
          id="bill"
          placeholder="0"
          value={value}
          onChange={handleChange}
          className={` bg-veryLightGrayishCyan border ${
            value === 0 ? "border-red-500" : "border-strongCyan"
          } text-darkGrayishCyan text-xl text-right font-bold rounded-lg focus:outline-verydarkCyan focus:ring-0 focus:border-verydarkCyan block w-full p-2.5`}
        />
      </div>
    </div>
  );
};

export default InputField;
