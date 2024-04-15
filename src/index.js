import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Main from './Pages/Main';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Resume from './Pages/Resume';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/resume',
    element: <Resume />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
