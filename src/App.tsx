import GlobalStyle from './styles/GlobalStyles';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
