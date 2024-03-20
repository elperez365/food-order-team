import "./App.css";
import Header from "./components/Header";

import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="relative h-[200vh]">
        <Header />
        <Products />
      </div>
    </>
  );
}

export default App;
