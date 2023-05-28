import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home.jsx';
import Programes from './pages/programes.jsx';
import About from './pages/about.jsx';
import Error from './pages/error.jsx';

import './style.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Home />,
    errorElement: <Error/>,
  },
  { 
    path: "/progs",
    element: <Programes />,
    errorElement: <Error/>,
  },
  { 
    path: "/about",
    element: <About />,
    errorElement: <Error/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
