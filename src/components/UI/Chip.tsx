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
        " flex cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm"
      }
      onClick={onClick}
    >
      {label + " " + "(" + quantity + ")"}
    </span>
  );
};

export default Chip;
