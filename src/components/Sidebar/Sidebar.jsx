import {NavLink} from "react-router-dom"
import {useContext} from "react"
import {FaHome} from "react-icons/fa"
import {IoIosSettings} from "react-icons/io"
import {IoLogOut} from "react-icons/io5"
import styles from "./Sidebar.module.css"
import AuthContext from "../../context/AuthContext"
import {CgProfile} from "react-icons/cg";

export default function Sidebar() {
    let value = useContext(AuthContext);
    let {handleLogOut} = useContext(AuthContext)
    return (
        <div
            className="d-none d-md-flex flex-md-column flex-md-shrink-0 p-3"
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#1a1a1a",
            }}
        >
            <NavLink
                to="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
                <strong className="fs-4 text-white">
                    YuristAI <span className="badge bg-primary fs-6">beta</span>
                </strong>
            </NavLink>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto gap-1">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className="nav-link d-flex justify-content-start align-items-center gap-1 text-white"
                        aria-current="page"
                    >
                        <FaHome/>
                        Xabarlar
                    </NavLink>
                </li>
                {/*<li className="nav-item">*/}
                {/*    <NavLink*/}
                {/*        to="/settings"*/}
                {/*        className="nav-link d-flex justify-content-start align-items-center gap-1 text-white"*/}
                {/*        aria-current="page"*/}
                {/*    >*/}
                {/*        <IoIosSettings/>*/}
                {/*        Sozlamalar*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                <li
                    className="nav-item"
                >
                    <div
                        className="nav-link d-flex justify-content-start align-items-center gap-1 text-danger"
                        style={{cursor: "pointer"}}
                        onClick={handleLogOut}
                    >
                        <IoLogOut style={{fill: "red"}} />
                        Chiqish
                    </div>
                </li>
                {/* Add similar NavLink components for other menu items */}
            </ul>
            <hr style={{color: "#6a6a6a"}}/>
            <div className="dropdown">
                {/*<NavLink to="/profile" className={styles.user}>*/}
                {/*    <div className="d-flex align-items-center gap-2">*/}
                {/*        <CgProfile className="fs-1"/>*/}
                {/*        <div className={styles.userDescription}>*/}
                {/*            <strong>{value.user.first_name} {value.user.last_name}</strong>*/}
                {/*            <small>{value.user.username}</small>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
                <div className="d-flex align-items-center gap-2">
                    <CgProfile className="fs-1"/>
                    <div className={styles.userDescription}>
                        <strong>{value.user.first_name} {value.user.last_name}</strong>
                        <small>{value.user.username}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

