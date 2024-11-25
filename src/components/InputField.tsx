import { ReactNode } from "react";

const InputField = ({
  formLabel,
  icon,
}: {
  formLabel: string;
  icon?: ReactNode;
}) => {
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
          className="bg-gray-100 border border-gray-100 text-darkGrayishCyan text-xl text-right font-bold rounded-lg focus:outline-verydarkCyan focus:ring-0 focus:border-verydarkCyan block w-full p-2.5"
        />
      </div>
    </div>
  );
};

export default InputField;
