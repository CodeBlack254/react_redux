import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/product';
import Navbar from './components/navbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Cart from './components/cart';
import RootLayout from './components/root_layout';
import Home from './components/home';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Route>
  ))
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
