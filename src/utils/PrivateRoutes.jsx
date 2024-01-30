import styles from "./styles.module.css"
import Sidebar from "../components/Sidebar/Sidebar"
import Feedback from "../components/Feedback/Feedback"
import { Outlet, Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"

export default function PrivateRoutes() 
{
    let { user, showFeedback } = useContext(AuthContext);

    return (
    <>
    {user ? (
      <div className={styles.wrapper}>
        { 
            showFeedback && 
            <div className={styles.feedbackContainer}>
                <Feedback />
            </div>
        }
        <Sidebar />
        <Outlet />
      </div>
    ) : (
      <Navigate to="/registration" />
    )}
    </>
  )
      
}


