import { Outlet } from 'react-router-dom';
import ReDesignHeader from './components/layouts/Header2';

function App() {
  return (
    <>
      <ReDesignHeader />
      <Outlet />
      <body>
        <div id="modal-root"></div>
      </body>
    </>
  );
}

export default App;
