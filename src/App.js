import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./common/GlobalStyle";
import Router from "./components/router";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Router />
    </BrowserRouter>
  );
}

export default App;
