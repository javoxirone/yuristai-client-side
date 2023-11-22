import Sidebar from "./components/Sidebar/Sidebar.jsx"
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Registration from "./components/RegistrationPage/Registration.jsx";
export default function App() {
    return (
        <div className="d-flex">
            <Sidebar/>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>
            </div>
        </div>
    );
}
