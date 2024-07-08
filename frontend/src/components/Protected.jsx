import React,{useContext}from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom'

export default function Protected ({children}) {
   let {pass} = useContext(UserContext)
    
        // let pass  = false
 if(pass){
    return children
 }else{
   return <Navigate to='/admin/adminLogin'/>
 }
    
  
}
