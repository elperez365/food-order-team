import { useReducer } from "react";
import { inputReducer } from "./inputReducer";
import "./input.scss";

class initialState {
  value = "";
  error = false;
}

export default function Input({
  action = "NO-CONTROLL",
  label = "",
  ...props
}) {
  const [state, dispatch] = useReducer(inputReducer, new initialState());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: action, payload: e.target.value });
  };

  const inputClass = `mx-auto ${state.error ? "error" : "not-error"}`;

  return (
    <div className="input-container my-1 w-full">
      <label className="" htmlFor={label}>
        {label}
      </label>
      <input
        name={label}
        className={inputClass}
        {...props}
        value={state.value}
        onChange={handleChange}
      />
    </div>
  );
}
