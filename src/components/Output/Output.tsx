import Button from "../Button/Button";

type OutputProps = {
  bill: number | string;
  tipValue: number;
  customAmount?: number | string;
  peopleInput: number | string;
  resetHandler?: () => void;
};

const Output = ({
  tipValue,
  bill,
  customAmount,
  peopleInput,
  resetHandler,
}: OutputProps) => {
  const calculateTipAndTotalPerPerson = (
    bill: number | string,
    tipValue: number,
    peopleInput: number | string,
    customAmount?: number | string,
  ) => {
    const numericBill = typeof bill === "string" ? parseFloat(bill) : bill;
    const numericPeopleInput =
      typeof peopleInput === "string" ? parseFloat(peopleInput) : peopleInput;
    const tipPercentage = customAmount
      ? typeof customAmount === "string"
        ? parseFloat(customAmount)
        : customAmount
      : tipValue * 100;

    const tip = (numericBill * tipPercentage) / 100;
    const total = numericBill + tip;
    const totalPerPersonResult = (total / numericPeopleInput).toFixed(2);
    const totalTipAmout = tip / numericPeopleInput;

    if (
      isNaN(tipPercentage) ||
      isNaN(numericPeopleInput) ||
      isNaN(numericBill)
    ) {
      return {
        tipAmountPerPerson: "0.00",
        totalBillPerPerson: "0.00",
      };
    }
    return {
      tipAmountPerPerson: totalTipAmout.toFixed(2),
      totalBillPerPerson: totalPerPersonResult,
    };
  };

  const tipAndTotal = calculateTipAndTotalPerPerson(
    bill,
    tipValue,
    peopleInput,
    customAmount,
  );
  return (
    <div className="w-full h-full flex flex-col gap-10 max-w-full border border-verydarkCyan bg-verydarkCyan rounded-3xl p-6 self-center md:max-w-3xl justify-between">
      <div className="flex flex-col space-y-8">
        <div className="tip-amount flex justify-between">
          <div>
            <h2 className="text-white tracking-wide">Tip Amount</h2>
            <p className="text-lightGrayishCyan tracking-wide"> / person</p>
          </div>
          <div className="output">
            <p className="text-strongCyan text-4xl">
              ${tipAndTotal.tipAmountPerPerson}
            </p>
          </div>
        </div>
        <div className="tip-amount flex justify-between">
          <div>
            <h2 className="text-white tracking-wide">Total</h2>
            <p className="text-lightGrayishCyan tracking-wide"> / person</p>
          </div>
          <div className="output">
            <p className="text-strongCyan  text-4xl">
              ${tipAndTotal.totalBillPerPerson}
            </p>
          </div>
        </div>
      </div>

      <Button
        width={"w-full"}
        label="RESET"
        colour="bg-strongCyan"
        hoverColour="bg-red-500"
        fn={resetHandler}
      />
    </div>
  );
};

export default Output;
