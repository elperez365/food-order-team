type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  text: string;
  style: "classic" | "textOnly";
};

let styleButton: string = "px-4 py-1 border-style: none text-gray-800";

const Button = ({ type = "button", onClick, text, style }: ButtonProps) => {
  if (style == "classic") {
    styleButton = styleButton + " bg-[#0b7a75] rounded-sm text-white";
  } else if (style == "textOnly") {
    styleButton = styleButton + " text-gray-800";
  }

  return (
    <button type={type} onClick={onClick} className={styleButton}>
      {text}
    </button>
  );
};

export default Button;
