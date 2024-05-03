import { Outlet } from 'react-router-dom';
import ReDesignHeader from './components/layouts/Header';

function App() {
  return (
    <>
      <ReDesignHeader />
      <Outlet />
      {/* <body>
        <div id="modal-root"></div>
      </body> */}
    </>
  );
}

export default App;
