import "./App.css";
import { Example } from "./components/Example/Example";
import Basic from "./components/basic/Basic.tsx";
import Cart from "./components/basic/Cart.tsx";

function App() {
  return (
    <>
      <Example />{" "}
        <Basic/>
        <Cart/>
    </>
  );
}

export default App;
