import React from "react";
import Button from "../Button/Button";

type TipSelectorProps = {
  customAmount: number | string;
  setCustomAmount: React.Dispatch<React.SetStateAction<number | string>>;
  setTipValue: React.Dispatch<React.SetStateAction<number>>;
};

const TipSelector = ({
  setTipValue,
  customAmount,
  setCustomAmount,
}: TipSelectorProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9.+\-*/]*$/.test(value)) {
      setCustomAmount(value);
    }
  };
  return (
    <div className="tip-selector flex flex-col space-y-2">
      <h1 className="font-bold text-darkGrayishCyan p-1 text-xl">
        Select Tip %
      </h1>
      <div className="grid grid-rows-3 grid-cols-2 gap-3 md:grid-rows-2 md:grid-cols-3">
        <Button
          width="w-8/10"
          label="5%"
          colour="bg-verydarkCyan"
          setTipValue={setTipValue}
          value={0.05}
          setCustomAmount={setCustomAmount}
        />
        <Button
          width="w-8/10"
          label="10%"
          colour="bg-verydarkCyan"
          setTipValue={setTipValue}
          value={0.1}
          setCustomAmount={setCustomAmount}
        />
        <Button
          width="w-8/10"
          label="15%"
          colour="bg-verydarkCyan"
          setTipValue={setTipValue}
          value={0.15}
          setCustomAmount={setCustomAmount}
        />
        <Button
          width="w-8/10"
          label="20%"
          colour="bg-verydarkCyan"
          setTipValue={setTipValue}
          value={0.2}
          setCustomAmount={setCustomAmount}
        />
        <Button
          width="w-8/10"
          label="25%"
          colour="bg-verydarkCyan"
          setTipValue={setTipValue}
          value={0.25}
          setCustomAmount={setCustomAmount}
        />
        <input
          type="text"
          value={customAmount}
          onChange={handleInputChange}
          placeholder="Custom"
          className="w-8/10 text-darkGrayishCyan border-darkGrayishCyan text-xl text-center font-bold rounded-lg p-3 focus:outline-verydarkCyan focus:ring-0 focus:border-verydarkCyan bg-veryLightGrayishCyan"
        />
      </div>
    </div>
  );
};

export default TipSelector;
