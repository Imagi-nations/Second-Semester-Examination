import { React } from "react";
//import { BrowserRouter } from "react-router-dom";
import FormHandler from "./components/form";
import Counter from "./components/Counter";
import Header from "./components/Header";
//import { ErrorBoundary } from "react-error-boundary";
function App() {

  return (
    <>
    {/*<ErrorBoundary>*/}
    <Header />
    <Counter />
    <div className="form">
      <FormHandler />
    </div>
    {/*</ErrorBoundary>*/}
    
    </>
  );
}

export default App;
