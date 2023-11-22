import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
    return (
        <div className="col-2">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: '100%', height: '100vh' }}>
                <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">YuristAI <span className="badge bg-primary fs-6">beta</span></span>
                </NavLink>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto gap-1">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex justify-content-start align-items-center gap-1" aria-current="page">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/settings" className="nav-link d-flex justify-content-start align-items-center gap-1" aria-current="page">
                            <IoIosSettings />
                            Settings
                        </NavLink>
                    </li>
                    {/* Add similar NavLink components for other menu items */}
                </ul>
                <hr />
                <div className="dropdown">
                    <NavLink to="/profile" className="d-flex align-items-center link-body-emphasis text-decoration-none gap-2">
                        {/*<CgProfile className="fs-1" />*/}
                        <img src="https://github.com/mdo.png" alt="" width="36" height="36" className="rounded-circle me-2" />
                        <div className="d-flex flex-column align-items-start justify-content-center">
                            <strong>Javohir Nurmatjonov</strong>
                            <small>javoxirone</small>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
