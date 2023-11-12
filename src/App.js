import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./common/GlobalStyle";
import { AuthProvider } from "context/authContext"
import Router from "./components/router";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Router />
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
