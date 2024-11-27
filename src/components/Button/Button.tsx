const Button = ({
  width,
  label,
  colour,
  hoverColour,
  setTipValue,
  value,
  fn,
}: {
  width: string;
  label: string;
  colour: string;
  hoverColour?: string;
  fn?: () => void;
  value: number;
  setTipValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTipValue(value);
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
