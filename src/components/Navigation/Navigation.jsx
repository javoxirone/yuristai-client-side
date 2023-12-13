import {useContext, useState} from "react"
import {CgMenuLeft} from "react-icons/cg"
import {NavLink} from "react-router-dom"
import {FaHome} from "react-icons/fa"
import {IoIosSettings} from "react-icons/io"
import {IoLogOut} from "react-icons/io5"
import {IoIosClose} from "react-icons/io"
import styles from "../Navigation/Navigation.module.css"
import "../../App.css"
import AuthContext from "../../context/AuthContext.jsx";

function Navigation() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    let value = useContext(AuthContext);
    return (
        <nav className={styles.nav}>
            <button className={styles.menuBtn} onClick={() => setSidebarIsOpen(true)}>
                <CgMenuLeft/>
            </button>
            {sidebarIsOpen ? (
                <div
                    className={styles.sidebarActive}
                    style={{
                        marginLeft: "-1.8rem",
                        height: "100%",
                        backgroundColor: "#1a1a1a",
                        borderRight: "1px solid #6a6a6a",
                        zIndex: 99999,
                    }}
                    onBlur={() => setSidebarIsOpen(false)}
                >
                    <button
                        className={styles.closeMenuBtn}
                        onClick={() => setSidebarIsOpen(false)}
                    >
                        <IoIosClose/>
                    </button>
                    {/* <hr /> */}
                    <ul className="nav nav-pills flex-column justify-content-center  gap-1 my-auto">
                        <li className="navItem nav-item">
                            <NavLink
                                to="/"
                                className="nav-link d-flex justify-content-start align-items-center gap-1 text-white"
                                aria-current="page"
                            >
                                <FaHome/>
                                Xabarlar
                            </NavLink>
                        </li>
                        {/*<li className="navItem nav-item">*/}
                        {/*    <NavLink*/}
                        {/*        to="/settings"*/}
                        {/*        className="nav-link d-flex justify-content-start align-items-center gap-1 text-white"*/}
                        {/*        aria-current="page"*/}
                        {/*    >*/}
                        {/*        <IoIosSettings/>*/}
                        {/*        Sozlamalar*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li className="navItem nav-item">
                            <NavLink
                                to="/registration"
                                className="nav-link d-flex justify-content-start align-items-center gap-1 text-danger"
                                aria-current="page"
                            >
                                <IoLogOut style={{fill: "red"}}/>
                                Chiqish
                            </NavLink>
                        </li>
                        {/* Add similar NavLink components for other menu items */}
                    </ul>
                    {/* <hr style={{ color: "#6a6a6a" }} /> */}
                </div>
            ) : null}
            <NavLink
                to="/"
                className="d-flex align-items-center  link-body-emphasis text-decoration-none"
            >
                <strong className="logo fs-4 text-white">
                    YuristAI <span className="badge bg-primary fs-6 ">beta</span>
                </strong>
            </NavLink>
            <div>
                <small><b>{value.user.username}</b></small>
            </div>
            {/*<NavLink to="/profile" className={styles.user}>*/}
            {/*    <img*/}
            {/*        src="https://github.com/mdo.png"*/}
            {/*        alt=""*/}
            {/*        width="36"*/}
            {/*        height="36"*/}
            {/*        className="rounded-circle me-2"*/}
            {/*    />*/}
            {/*</NavLink>*/}
        </nav>
    )
}

export default Navigation
