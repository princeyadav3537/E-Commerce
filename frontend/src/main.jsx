import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Admin from './components/Admin.jsx'
import AddProduct from './components/AddProduct.jsx'
import ViewProduct from './components/ViewProduct.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'
import ClientApp from './clientApp.jsx'
import Home from './Client/Home.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import Protected from './components/Protected.jsx'
import Cart from './Client/Cart.jsx'
import ClientLogin from './Client/ClientLogin.jsx'
import ClientRegister from './Client/ClientRegister.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path='/' element={<ClientApp/>}>
    <Route path='' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/clientLogin' element={<ClientLogin/>} />
    <Route path='/clientSignup' element={<ClientRegister/>} />
    </Route>


  <Route path='/admin' element={<App/>}>
      <Route path='' element={
 <Protected>
 <Admin/>
</Protected>
      }/>



    <Route path='/admin/addProduct' element={
 <Protected>
 <AddProduct/>
</Protected>
    } />



    <Route path='/admin/viewProduct/:id' element={<ViewProduct/>}/>
    <Route path='/admin/updateProduct/:id' element={<UpdateProduct/>}/>
    <Route path='/admin/adminlogin' element={<AdminLogin/>}/>
    </Route>
  </>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
