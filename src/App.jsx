import Sidebar from "./components/Sidebar/Sidebar.jsx"
import { Route, Routes } from "react-router-dom"
import Main from "./components/Main/Main.jsx"
import Settings from "./pages/Settings/Settings.jsx"
import Profile from "./pages/Profile/Profile.jsx"
import Registration from "./pages/Registration/Registration.jsx"
import "./App.css"

export default function App() 
{
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="chat" style={{ backgroundColor: "#23262d" }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </div>
  )
}

