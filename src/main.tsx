import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Footer from './componentes/footer/Footer'
import Contato from './componentes/contatos/Contato'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
              <Header/>
              <Main/>
              <Footer/>
            </>,
  },
  {
    path: "/home",
    element: 
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  },
  {
    path: "/contato",
    element: 
    <>
    <Header/>
    <Contato/>
    <Footer/>
    </>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
