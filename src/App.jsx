import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';
import Infrastructure from './components/Infrastructure/Infrastructure';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Application from './components/Application/Application';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/infrastructure",
    element: <Infrastructure />,
  },
  {
    path: "/application",
    element: <Application />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
