import "./App.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { increment } from "./redux/slices/counterSlice";

function App() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <p className="text bg-red-500">{counter}</p>
      <button onClick={() => dispatch(increment())}>INCREMENTA</button>
      <p>ho fatto una modific di prova</p>
      <p>ciao a tutti - fede</p>
    </>
  );
}

export default App;
