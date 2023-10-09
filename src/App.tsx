import "./App.css";
import { Example } from "./components/Example/Example";
import Basic from "./components/basic/Basic.tsx";
import Cart from "./components/basic/Cart.tsx";
import Modal from "./components/basic/Modal.tsx";
import BasicTabs from "./components/basic/Tabs.tsx";

function App() {
  return (
    <>
      <Example />{" "}
        <Basic/>
        <Cart/>
      <Modal/>
        <BasicTabs/>
    </>
  );
}

export default App;
