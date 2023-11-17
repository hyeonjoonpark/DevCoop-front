import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './common/GlobalStyle';
import { AuthProvider } from 'context/authContext';
import MainRouter from './components/MainRouter';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <MainRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
