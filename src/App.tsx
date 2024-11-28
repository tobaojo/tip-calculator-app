import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import InputField from "./components/InputField/InputField";
import TipSelector from "./components/TipSelector/TipSelector";
import DollarIcon from "./components/DollarIcon/DollarIcon";
import PeopleIcon from "./components/PeopleIcon/PeopleIcon";
import Output from "./components/Output/Output";

function App() {
  const [billAmount, setBillAmount] = useState<number | string>("");
  const [customAmount, setCustomAmount] = useState<number | string>("");
  const [people, setPeople] = useState<number | string>("");
  const [tipValue, setTipValue] = useState<number>(0);

  const resetHandler = () => {
    setBillAmount("");
    setCustomAmount("");
    setPeople("");
    setTipValue(0);
  };

  return (
    <>
      <Logo className="m-20" />
      <div className="flex flex-col card w-full max-w-full border border-gray-200 bg-white rounded-3xl p-4 gap-4 h-screen self-center space-y-6 justify-evenly md:max-w-4xl md:h-[50vh]">
        <form className="flex flex-col gap-7 md:flex-row h-full">
          <div className="flex flex-col w-full justify-evenly">
            <InputField
              formLabel={"Bill"}
              icon={<DollarIcon />}
              value={billAmount}
              setValue={setBillAmount}
            />
            <TipSelector
              setTipValue={setTipValue}
              customAmount={customAmount}
              setCustomAmount={setCustomAmount}
            />
            <InputField
              formLabel={"Number of People"}
              icon={<PeopleIcon />}
              value={people}
              setValue={setPeople}
            />
          </div>
          <div className="w-full md:p-6">
            <Output
              bill={billAmount}
              tipValue={tipValue}
              customAmount={customAmount}
              peopleInput={people}
              resetHandler={resetHandler}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
