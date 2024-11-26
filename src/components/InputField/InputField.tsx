import React, { ReactNode } from "react";

const InputField = ({
  formLabel,
  icon,
  value,
  setValue,
}: {
  formLabel: string;
  icon?: ReactNode;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setValue(value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="bill" className="font-bold text-darkGrayishCyan p-1">
        {formLabel}
      </label>
      <div className="relative w-full flex">
        <div className="absolute my-auto justify-center self-center left-3">
          {icon}
        </div>
        <input
          type="number"
          name="bill"
          id="bill"
          value={value}
          onChange={handleChange}
          className="bg-veryLightGrayishCyan border border-strongCyan text-darkGrayishCyan text-xl text-right font-bold rounded-lg focus:outline-verydarkCyan focus:ring-0 focus:border-verydarkCyan block w-full p-2.5"
        />
      </div>
    </div>
  );
};

export default InputField;
