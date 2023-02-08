import logo from './logo.svg';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Responsive.css'
import Navbar  from './Components/Navbar/Navbar';
import { Products } from './Pages/Products/Products';
import Product from './Pages/Product/product'
import { Home } from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { About } from './Pages/About/About';

const Layout = () =>{
  return(
    <div className="App"> 
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

function App() {
  const router =createBrowserRouter ([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>
        },
        {
          path: "/products/:id",
          element: <Products></Products>
        },
    
        {
          path: "/product/:id",
          element: <Product></Product>
        },
        {
          path: "/about",
          element: <About></About>
        },
      ]
    },
    
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
