import React from 'react'
import Layout from './Component/Layout/Layout'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Start from './Component/Start/Start';
import NotFound from './Component/NotFound/NotFound';

export default function App() {
  let routes = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { index: true, element: <Start /> },
      { path: "About", element: <About /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "Contact", element: <Contact /> },


      { path: "*", element: <NotFound /> },

    ]
  }])



  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

