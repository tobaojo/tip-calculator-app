const Button = ({
  width,
  label,
  colour,
  hoverColour,
  fn,
}: {
  width: string;
  label: string;
  colour: string;
  hoverColour?: string;
  fn?: () => void;
}) => {
  return (
    <button
      className={`p-3 ${colour} text-white text-xl rounded-lg ${width} ${
        hoverColour ? `hover:bg-lightGrayishCyan` : `hover:bg-strongCyan`
      }`}
      onClick={fn}
    >
      {label}
    </button>
  );
};

export default Button;
