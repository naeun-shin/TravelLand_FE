import Header from './components/layouts/Header';
import GlobalStyle from './styles/GlobalStyles';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
