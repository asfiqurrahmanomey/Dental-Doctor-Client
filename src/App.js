import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
