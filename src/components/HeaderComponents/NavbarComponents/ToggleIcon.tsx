type ToggleIconProps = {
  onToggle: () => void;
  isOpen: boolean;
};

export default function ToggleIcon({ onToggle, isOpen }: ToggleIconProps) {
  return (
    <>
      <div className="flex h-full items-center justify-center md:hidden">
        <button
          onClick={onToggle}
          className="p-4 text-center text-4xl font-semibold text-white hover:brightness-110"
        >
          {isOpen ? "x" : "="}
        </button>
      </div>
    </>
  );
}
