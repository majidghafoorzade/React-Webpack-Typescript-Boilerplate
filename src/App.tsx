import { RouterProvider } from 'react-router-dom';
import router from 'config/router';
import 'assets/scss/app.scss';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
