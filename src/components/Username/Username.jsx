import styles from "./Username.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { usernameRegex } from "../../pages/Registration/regex";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../context/AuthContext";

function Username({ isUsernameValid, setIsUsernameValid }) 
{
    const [borderColor, setBorderColor] = useState("#6a6a6a");
    const [iconColor, setIconColor] = useState("#FFFFFF");
    const { username, setUsername } = useContext(AuthContext);

    const inputRef = useRef(null);

    useEffect(() => {
        function handleChange(e) 
        {
            const inputValue = e.target.value;

            setUsername(inputValue);

            setBorderColor(
                usernameRegex.test(inputValue) ? "#4bb543" : "#ed4337"
            );

            setIconColor(
                usernameRegex.test(inputValue) ? "#4bb543" : "#ed4337"
            );

            setIsUsernameValid(
                usernameRegex.test(inputValue)
            );
        }

        function handleFocus()
        {
            setBorderColor("#0d6efd");
            setIconColor("#0d6efd");         
        }

        function handleBlur() 
        {
            if (username.length > 0)
            {
                setBorderColor(
                    usernameRegex.test(username) ? "#4bb543" : "#ed4337"
                );

                setIconColor(
                    usernameRegex.test(username) ? "#4bb543" : "#ed4337"
                );

                setIsUsernameValid(
                    usernameRegex.test(username)
                );

                inputRef.current.removeEventListener("focus", handleFocus);
                inputRef.current.removeEventListener("blur", handleBlur);
                inputRef.current.removeEventListener("input", handleInput);

                inputRef.current.addEventListener("input", handleChange);
            } else 
            {
                setBorderColor("#6a6a6a");
                setIconColor("#ffffff");
            }
        }

        function handleInput(e)
        {
            setUsername(e.target.value);
        }

        if (inputRef.current)
        {
            inputRef.current.addEventListener("focus", handleFocus);
            inputRef.current.addEventListener("blur", handleBlur);
            inputRef.current.addEventListener("input", handleInput);
        }

        return () => {
            if (inputRef.current)
            {
                inputRef.current.removeEventListener("focus", handleFocus);
                inputRef.current.removeEventListener("blur", handleBlur);
                inputRef.current.removeEventListener("input", handleInput);
            }
        }
    }, [username]);

    return (
        <div className={styles.container}>
            <div 
            className={`${styles.usernameInput} ${isUsernameValid == false && styles.shake}`}
            style={{ borderColor: borderColor }}
            >
                <FontAwesomeIcon
                icon={faUser}
                style={{ color: iconColor }}
                className={styles.icon}
                />
                <input 
                type="text" 
                placeholder="Foydalanuvchi ismini kiriting"
                ref={inputRef}
                />
            </div>
            {
                isUsernameValid == false &&
                <p className={styles.errorMessage}>
                    Foydalanuvchi nomi kamida 4 ta belgidan iborat bo`lishi kerak!
                </p>
            }
        </div>
    )
}

export default Username;