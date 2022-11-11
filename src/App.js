import { React } from "react";
//import { BrowserRouter } from "react-router-dom";
import FormHandler from "./components/form";
import Counter from "./components/Counter";
import Header from "./components/Header";
import ErrorBoundary from "./ErrorHandlers/ErrorBoundary";
//import useMyReducer from "./Hooks/useMyReducer";
function App() {
  //const [initialState, dispatch] = useReducer(myReducer, 0)
  return (
    <>
    <ErrorBoundary>
    <Header />
    <Counter />
    <div className="form">
      <FormHandler />
    </div>
    </ErrorBoundary>
    
    </>
  );
}

export default App;
