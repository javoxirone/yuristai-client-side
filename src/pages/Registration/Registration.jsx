import styles from "./Registration.module.css";
import Username from "../../components/Username/Username.jsx";
import Email from "../../components/Email/Email";
import ExistingPassword from "../../components/ExistingPassword/ExistingPassword.jsx";
import ExistingUsername from "../../components/ExistingUsername/ExistingUsername.jsx";
import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() 
{
    const [username, setUsername] = useState("");
    const [inProp, setInProp] = useState(false);

    const [isUsernameValid, setIsUsernameValid] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(null);

    const [newUser, setNewUser] = useState(true);

    const navigate = useNavigate();

    const { 
        handleSignIn, 
        existingPassword, 
        setExistingPassword,
        existingUsername,
        setExistingUsername,
    } = useContext(AuthContext);

    const signUpButton = {
        backgroundColor: newUser ? "#0d6efd" : "#003c91",
        color: newUser ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.5)",
        transition: "background-color 0.5s",
    }

    const signInButton = {
        backgroundColor: newUser ? "#003c91" : "#0d6efd",
        color: newUser ? "rgba(255, 255, 255, 0.5)" : "rgb(255, 255, 255)",
        transition: "background-color 0.5s",
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        navigate("/passwordGeneration");
    }

    return (
        <div className={styles.container}>
            <div className={styles.registration}>
                <nav className={styles.navigation}>
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
                </nav>
                <main className={styles.main}>
                {newUser ? (
                    <>
                    <h1 className={styles.heading}>
                        <b>Bepul ro'yxatdan o'ting</b>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <Username
                        isUsernameValid={isUsernameValid}
                        setIsUsernameValid={setIsUsernameValid}
                       />
                        <Email
                        isEmailValid={isEmailValid}
                        setIsEmailValid={setIsEmailValid}
                        />
                        <button 
                        className={styles.linkButton}
                        disabled={
                            isEmailValid == true 
                            && 
                            isUsernameValid == true ? false : true 
                        }
                        >
                            Davom Etish
                        </button>
                    </form>
                    </>
                ) : (
                    <>
                    <h1 className={styles.heading}>
                        <b>Qaytganingizdan Mavnunman!</b>
                    </h1>
                    <form onSubmit={handleSignIn}>
                        <ExistingUsername
                        existingUsername={existingUsername}
                        setExistingUsername={setExistingUsername}
                        placeholder={"Foydalanuvchi ismini kiriting"}
                        />
                        <ExistingPassword 
                        existingPassword={existingPassword}
                        setExistingPassword={setExistingPassword}
                        placeholder={"Parolni kiriting"}
                        />
                        <button 
                        className={styles.loginButton}
                        disabled={
                            existingUsername.length >= 4
                            && 
                            existingPassword.length >= 8 ? false : true
                        }
                        >
                            Tizimga Kirish
                        </button>
                    </form>
                    </>
                )}
                </main>
            </div>
        </div>
    )
}
