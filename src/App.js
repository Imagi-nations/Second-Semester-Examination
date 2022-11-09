import { React } from "react";
//import { BrowserRouter } from "react-router-dom";
import FormHandler from "./components/form";
import Counter from "./components/Counter";
import Header from "./components/Header";
import useCustomHook from "./Hooks/useCustomHook";
function App() {

  return (
    <>
      <Header />
      <Counter />
      <div className="form">
        <FormHandler />
      </div>
    </>
  );
}

export default App;
