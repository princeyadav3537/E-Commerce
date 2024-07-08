import React from 'react'
import UserNavbar from './Client/UserNavbar'

import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider2'

export default function clientApp() {
  return (
    <UserContextProvider>
      <UserNavbar/>
      <Outlet/>

    </UserContextProvider>


    // <div>
    //   <UserNavbar/>
    //   <Outlet/>

    // </div>
    
  )
}
