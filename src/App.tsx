import "./App.css";
import { Example } from "./components/Example/Example";
import Basic from "./components/basic/Basic.tsx";

function App() {
  return (
    <>
      <Example />{" "}
        <Basic/>
    </>
  );
}

export default App;
