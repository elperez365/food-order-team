import React from "react";

interface ChipProps {
  label: string;
  selectedValue: string;
  onClick: () => void;
  quantity: number;
}

const Chip: React.FC<ChipProps> = ({
  label,
  selectedValue,
  onClick,
  quantity,
}) => {
  const isSelected = selectedValue === label;
  const classChip = isSelected
    ? "bg-midnightGreen text-white"
    : "bg-white text-gray-700";
  return (
    <span
      className={
        classChip +
        " mx-1 flex cursor-pointer items-center justify-center text-nowrap rounded-full px-3 py-2 text-sm"
      }
      onClick={onClick}
    >
      {label + " " + "(" + quantity + ")"}
    </span>
  );
};

export default Chip;
