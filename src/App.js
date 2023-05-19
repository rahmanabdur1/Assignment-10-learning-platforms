
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Pages/Routes/Routes/Routes';

import { useContext } from 'react';
import { DarkModeContext } from './Contexts/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
