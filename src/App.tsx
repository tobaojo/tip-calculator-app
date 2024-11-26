import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import InputField from "./components/InputField/InputField";
import TipSelector from "./components/TipSelector/TipSelector";
import DollarIcon from "./components/DollarIcon/DollarIcon";
import PeopleIcon from "./components/PeopleIcon/PeopleIcon";
import Output from "./components/Output/Output";

function App() {
  const [billInput, setBillInput] = useState<number>(0);
  const [peopleInput, setPeopleInput] = useState<number>(0);

  return (
    <>
      <Logo className="m-6" />
      <div className="flex flex-col card w-full max-w-full border border-gray-200 bg-white rounded-xl p-4 gap-4 h-screen self-center space-y-6 justify-evenly md:max-w-5xl md:h-[50vh]">
        <form className="flex flex-col gap-7 md:flex-row h-full">
          <div className="flex flex-col w-full justify-evenly">
            <InputField
              formLabel={"Bill"}
              icon={<DollarIcon />}
              value={billInput}
              setValue={setBillInput}
            />
            <TipSelector />
            <InputField
              formLabel={"Number of People"}
              icon={<PeopleIcon />}
              value={peopleInput}
              setValue={setPeopleInput}
            />
          </div>
          <div className="w-full">
            <Output />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
