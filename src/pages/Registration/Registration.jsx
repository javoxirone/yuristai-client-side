import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLock,
  faEye,
  faEyeSlash,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import styles from "./Registration.module.css"
import { useState } from "react"
import Navigation from "../../components/Navigation"

export default function Registration() {
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const [isIconClicked, setIsIconClicked] = useState(false)
  const [newUser, setNewUser] = useState(true)

  function savePassword(e) {
    setPassword(e.target.value)
  }

  const signUpButton = {
    // border: "none",
    backgroundColor: newUser ? "rgb(93, 81, 242)" : "rgba(93, 81, 242, 0.6)",
    transition: "background-color 0.5s",
    borderRadius: 5,
    // width: 300,
    // height: 60,
    // fontSize: 22,
    // color: "white",
    // position: "relative",
    // top: 0
  }

  const signInButton = {
    // border: "none",
    backgroundColor: newUser ? "rgba(93, 81, 242, 0.6)" : "rgb(93, 81, 242)",
    transition: "background-color 0.5s",
    borderRadius: 5,
    // width: 300,
    // height: 60,
    // fontSize: 22,
    // color: "white"
  }

  // const registration = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   boxSizing: "border-box",
  //   padding: 40,
  //   width: 700,
  //   height: newUser ? 600 : 550,
  //   backgroundColor: "#1a1a1a",
  //   rowGap: 50,
  //   borderRadius: 10,
  // }

  return (
    <div className="d-flex flex-column h-100">
      <Navigation />
      <div className={styles.container}>
        <div className={styles.registration}>
          {/* removed "style={registration}" */}
          <div className={styles.buttons}>
            <button
              className={styles.signUpButton}
              style={signUpButton}
              onClick={() => setNewUser(true)}
            >
              Ro'yxatdan O'tish
            </button>
            <button
              className={styles.signInButton}
              style={signInButton}
              onClick={() => setNewUser(false)}
            >
              Tizimga Kirish
            </button>
          </div>
          {newUser ? (
            <div className={styles.main}>
              <div className={styles.heading}>
                <b>Bepul ro'yxatdan o'ting</b>
              </div>
              <form className={styles.form}>
                <div className={styles.nameForm}>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className={styles.firstNameInput}
                    placeholder="Ismingizni kiriting"
                    required
                  />
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className={styles.lastNameInput}
                    placeholder="Familiyangizni kiriting"
                    required
                  />
                </div>
                <div className={styles.emailForm}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.envelopeIcon}
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className={styles.emailInput}
                    placeholder="Elektron pochtangizni kiriting"
                    required
                  />
                </div>
                <div className={styles.passwordForm}>
                  <FontAwesomeIcon icon={faLock} className={styles.lockIcon} />
                  <input
                    className={styles.passwordInput}
                    type={isIconClicked ? "text" : "password"}
                    placeholder="Parol yarating"
                    onChange={(e) => savePassword(e)}
                    required
                  />
                  {password.length > 0 && (
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={isIconClicked ? faEye : faEyeSlash}
                      onClick={() => setIsIconClicked(!isIconClicked)}
                    />
                  )}
                </div>
                <button className={styles.submitButton}>
                  Akkaunt Yaratish
                </button>
              </form>
            </div>
          ) : (
            <div className={styles.main2}>
              <div className={styles.heading2}>
                <b>Qaytganingizdan Mavnunman!</b>
              </div>
              <form className={styles.form2}>
                <div className={styles.emailForm}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white" }}
                  />
                  <input
                    type="email"
                    className={styles.emailInput}
                    placeholder="Elektron pochtangizni kiriting"
                  />
                </div>
                <div className={styles.passwordInputContainer}>
                  <div className={styles.passwordForm}>
                    <FontAwesomeIcon icon={faLock} style={{ color: "white" }} />
                    <input
                      className={styles.passwordInput}
                      type={isIconClicked ? "text" : "password"}
                      placeholder="Parol yarating"
                      onChange={(e) => savePassword(e)}
                    />
                    {password.length > 0 && (
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={isIconClicked ? faEye : faEyeSlash}
                        onClick={() => setIsIconClicked(!isIconClicked)}
                      />
                    )}
                  </div>
                  <div className={styles.link}>
                    <a href="###">Parolni unutdingizmi?</a>
                  </div>
                </div>
                <button className={styles.logInButton}>Tizimga Kirish</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
