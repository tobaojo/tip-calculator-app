type ButtonProps = {
  width: string;
  label: string;
  colour: string;
  hoverColour?: string;
  setCustomAmount?: React.Dispatch<React.SetStateAction<number | string>>;
  fn?: () => void;
  value?: number;
  setTipValue?: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({
  width,
  label,
  colour,
  hoverColour,
  setTipValue,
  value,
  setCustomAmount,
  fn,
}: ButtonProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (setTipValue && setCustomAmount) {
      if (value) {
        setTipValue(value);
        setCustomAmount(0);
      }
    }

    if (fn) {
      fn();
    }
  };
  return (
    <button
      className={`p-3 ${colour} text-white text-xl rounded-lg ${width} ${
        hoverColour ? `hover:bg-lightGrayishCyan` : `hover:bg-strongCyan`
      }`}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
};

export default Button;
