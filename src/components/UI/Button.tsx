type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  text: string;
  style: "classic" | "textOnly" | "classicFullSize";
};

let styleButton: string = "px-4 m-1 py-1 border-style: none text-gray-800";

const Button = ({ type = "button", text, style, ...props }: ButtonProps) => {
  if (style == "classic") {
    styleButton = styleButton + " bg-[#0b7a75] rounded-md text-white";
  } else if (style == "textOnly") {
    styleButton = styleButton + " text-gray-800";
  } else if (style == "classicFullSize") {
    styleButton =
      styleButton + " bg-[#0b7a75] rounded-md text-white size-full py-2";
  }

  return (
    <button type={type} className={styleButton} {...props}>
      {text}
    </button>
  );
};

export default Button;
