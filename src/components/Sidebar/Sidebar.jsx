import { NavLink } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { IoIosSettings } from "react-icons/io"
import { IoLogOut } from "react-icons/io5"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1a1a1a",
        borderRight: "1px solid #6a6a6a",
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
      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-1">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link d-flex justify-content-start align-items-center gap-1 text-white"
            aria-current="page"
          >
            <FaHome />
            Xabarlar
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/settings"
            className="nav-link d-flex justify-content-start align-items-center gap-1 text-white"
            aria-current="page"
          >
            <IoIosSettings />
            Sozlamalar
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/registration"
            className="nav-link d-flex justify-content-start align-items-center gap-1 text-white"
            aria-current="page"
          >
            <IoLogOut />
            Chiqish
          </NavLink>
        </li>
        {/* Add similar NavLink components for other menu items */}
      </ul>
      <hr style={{ color: "#6a6a6a" }} />
      <div className="dropdown">
        <NavLink to="/profile" className={styles.user}>
          {/*<CgProfile className="fs-1" />*/}
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="36"
            height="36"
            className="rounded-circle me-2"
          />
          <div className={styles.userDescription}>
            <strong>Javohir Nurmatjonov</strong>
            <small>javoxirone</small>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
