import Email from "../../components/Email/Email";
import Password from "../../components/Password/Password";
import Username from "../../components/Username/Username.jsx";
import AuthContext from "../../context/AuthContext";
import styles from "./Registration.module.css";
import { emailRegex, passwordRegex, usernameRegex } from "./regex";
import { useContext, useState } from "react";

export default function Registration() 
{
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [existingUsername, setExistingUsername] = useState("");
  const [password, setPassword] = useState("");
  const [existingPassword, setExistingPassword] = useState("");

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [viewPassword, setViewPassword] = useState(false);
  const [viewExistingPassword, setViewExistingPassword] = useState(false);
  const [newUser, setNewUser] = useState(true);

  const [emailBorder, setEmailBorder] = useState("2px solid #6a6a6a");
  const [usernameBorder, setUsernameBorder] = useState("2px solid #6a6a6a");
  const [passwordBorder, setPasswordBorder] = useState("2px solid #6a6a6a");

  const signUpButton = {
    backgroundColor: newUser ? "rgb(93, 81, 242)" : "rgba(93, 81, 242, 0.6)",
    transition: "background-color 0.5s",
    borderRadius: 5
  }

  const signInButton = {
    backgroundColor: newUser ? "rgba(93, 81, 242, 0.6)" : "rgb(93, 81, 242)",
    transition: "background-color 0.5s",
    borderRadius: 5
  }

  function handleUsername(e)
  {
    setUsername(e.target.value);
    setIsUsernameValid(usernameRegex.test(e.target.value));
    setUsernameBorder(usernameRegex.test(e.target.value) ? "3px solid #4bb543" : "3px solid #ff0000");
  }

  function handleEmail(e)
  {
    setEmail(e.target.value);
    setIsEmailValid(emailRegex.test(e.target.value));
    setEmailBorder(emailRegex.test(e.target.value) ? "3px solid #4bb543" : "3px solid #ff0000");
  }

  function handlePassword(e)
  {
    setPassword(e.target.value);
    setIsPasswordValid(passwordRegex.test(e.target.value));
    setPasswordBorder(passwordRegex.test(e.target.value) ? "3px solid #4bb543" : "3px solid #ff0000");
  }

  const { handleSignUp } = useContext(AuthContext);
  const { handleSignIn } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.registration}>
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
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", rowGap: 20 }}>
            <h1 className={styles.signUpHeading}>
              <b>Bepul ro'yxatdan o'ting</b>
            </h1>
            <form className={styles.signUpForm} onSubmit={handleSignUp}>
              <Username
                handleUsername={handleUsername}
                value={username}
                border={usernameBorder}
                name={"username"}
              />
              <Email 
                handleEmail={handleEmail} 
                value={email} 
                border={emailBorder} 
                name={"email"}
              />
              <Password 
                handlePassword={handlePassword}
                value={password}
                border={passwordBorder}
                viewPassword={viewPassword}
                setViewPassword={setViewPassword}
                name={"password"}
              />
              {
                isUsernameValid && isEmailValid && isPasswordValid &&
                <button className={styles.submitButton}>Akkaunt Yaratish</button> 
              }
            </form>
            </div>
          ) : (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: 30 }}>
              <h1 className={styles.signInHeading}>
                <b>Qaytganingizdan Mavnunman!</b>
              </h1>
              <form className={styles.signInForm} onSubmit={handleSignIn}>
                <Username
                  handleUsername={(e) => setExistingUsername(e.target.value)}
                  value={existingUsername}
                  name={"existingUsername"}
                />
                <div className={styles.signInPasswordContainer}>
                  <Password 
                    handlePassword={(e) => setExistingPassword(e.target.value)} 
                    value={existingPassword}
                    viewPassword={viewExistingPassword}
                    setViewPassword={setViewExistingPassword}
                    name={"existingPassword"}
                  />
                  <div className={styles.link}>
                    <a href="###">Parolni unutdingizmi?</a>
                  </div>
                </div>
                {
                  existingUsername.length >= 4 && existingPassword.length >= 8 &&
                  <button className={styles.logInButton}>Tizimga Kirish</button>
                }
              </form>
            </div>
          )}
        </div>
      </div>
  )
}
