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
    </>
  );
}

export default App;
