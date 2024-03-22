type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;

  text: string | JSX.Element;
  style: "classic" | "textOnly" | "classicFullSize" | "classicBounce";
};

const Button = ({ type = "button", text, style, ...props }: ButtonProps) => {
  let styleButton: string = "px-4 m-1 py-1 border-style: none text-gray-800";
  if (style === "textOnly") {
    styleButton = styleButton + " bg-transparent text-gray-800";
  } else if (style === "classic") {
    styleButton = styleButton + " bg-[#0b7a75] rounded-md text-white";
  } else if (style === "classicFullSize") {
    styleButton =
      styleButton +
      " bg-[#0b7a75] rounded-md text-white w-full py-2 mx-auto md:max-w-[20rem]";
  } else if (style === "classicBounce") {
    styleButton =
      styleButton + " bg-[#0b7a75] rounded-md text-white animate-bounce";
  }

  return (
    <button type={type} className={styleButton} {...props}>
      {text}
    </button>
  );
};

export default Button;
