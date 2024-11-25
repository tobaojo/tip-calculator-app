import Button from "./Button";

const Output = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 max-w-full border border-verydarkCyan bg-verydarkCyan rounded-xl p-6 self-center md:max-w-3xl justify-between">
      <div className="flex flex-col space-y-8">
        <div className="tip-amount flex justify-between">
          <div>
            <h2 className="text-white tracking-wide">Tip Amount</h2>
            <p className="text-lightGrayishCyan tracking-wide"> / person</p>
          </div>
          <div className="output">
            <p className="text-strongCyan text-4xl">100</p>
          </div>
        </div>
        <div className="tip-amount flex justify-between">
          <div>
            <h2 className="text-white tracking-wide">Total</h2>
            <p className="text-lightGrayishCyan tracking-wide"> / person</p>
          </div>
          <div className="output">
            <p className="text-strongCyan  text-4xl">100</p>
          </div>
        </div>
      </div>

      <Button
        width={"w-full"}
        label="RESET"
        colour="bg-strongCyan"
        hoverColour="bg-red-500"
      />
    </div>
  );
};

export default Output;
