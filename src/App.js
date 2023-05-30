
import './App.css';
import { RouterProvider } from 'react-router-dom';


import { useContext } from 'react';
import { DarkModeContext } from './Contexts/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { routes } from './Routes/Routes/Routes';

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
