import styles from "./styles.module.css"
import Sidebar from "../components/Sidebar/Sidebar"
import { Outlet, Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useEffect } from "react"

export default function PrivateRoutes() 
{
  let { user } = useContext(AuthContext);


  return (
    <>
    {user ? (
      <div className={styles.wrapper}>
        <Sidebar />
        <Outlet />
      </div>
    ) : (
      <Navigate to="/registration" />
    )}
    </>
  )
      
}


