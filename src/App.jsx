import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./App.css";

export default function App() 
{
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Main />} exact />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </AuthProvider>
    </>
  )
}

