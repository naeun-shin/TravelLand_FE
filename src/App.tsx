import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
      <body>
        <div id="modal-root"></div>
      </body>
    </>
  );
}

export default App;
