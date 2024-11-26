import Button from "../Button/Button";

const TipSelector = () => {
  return (
    <div className="tip-selector flex flex-col space-y-2">
      <h1 className="font-bold text-darkGrayishCyan p-1 text-xl">
        Select Tip %
      </h1>
      <div className="grid grid-rows-3 grid-cols-2 gap-3 md:grid-rows-2 md:grid-cols-3">
        <Button width="w-8/10" label="5%" colour="bg-verydarkCyan" />
        <Button width="w-8/10" label="10%" colour="bg-verydarkCyan" />
        <Button width="w-8/10" label="15%" colour="bg-verydarkCyan" />
        <Button width="w-8/10" label="20%" colour="bg-verydarkCyan" />
        <Button width="w-8/10" label="25%" colour="bg-verydarkCyan" />
        <Button width="w-8/10" label="custom" colour="bg-verydarkCyan" />
      </div>
    </div>
  );
};

export default TipSelector;
