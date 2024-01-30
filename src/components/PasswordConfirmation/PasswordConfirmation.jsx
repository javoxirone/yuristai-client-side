import styles from "./PasswordConfirmation.module.css"
import { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthContext";

function PasswordConfirmation({ isMatching, setIsMatching }) 
{
    const [borderColor, setBorderColor] = useState("#6a6a6a");
    const [iconColor, setIconColor] = useState("#ffffff");
    const [viewPassword, setViewPassword] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const { password } = useContext(AuthContext);

    const input = useRef(null);

    useEffect(() => {
        function handleChange(e)
        {
            setInputValue(e.target.value);
            setBorderColor(
                password == e.target.value ? "#4bb543" : "#ed4337"
            );
            setIconColor(
                password == e.target.value ? "#4bb543" : "#ed4337"
            );
            setIsMatching(
                password == e.target.value
            );
        }

        function handleInput(e)
        {
            setInputValue(e.target.value)
        }
        
        function handleFocus()
        {
            setBorderColor("#0d6efd");
            setIconColor("#0d6efd");
        }

        function handleBlur() 
        {
            if (inputValue.length > 0) 
            {
                setBorderColor(
                    password == inputValue ? "#4bb543" : "#ed4337"
                );
                setIconColor(
                    password == inputValue ? "#4bb543" : "#ed4337"
                );
                setIsMatching(
                    password == inputValue
                );

                input.current.removeEventListener("focus", handleFocus);
                input.current.removeEventListener("input", handleInput);
                input.current.removeEventListener("blur", handleBlur);
                input.current.addEventListener("input", handleChange);
            } else 
            {
                setBorderColor("#6a6a6a");
                setIconColor("#ffffff");
            }
        }

        if (input.current)
        {
            input.current.addEventListener("focus", handleFocus);
            input.current.addEventListener("blur", handleBlur);
            input.current.addEventListener("input", handleInput);
        }

        return () => {
            if (input.current)
            {
                input.current.removeEventListener("blur", handleBlur);
                input.current.removeEventListener("focus", handleFocus);
                input.current.removeEventListener("input", handleInput);
            }
        }
    }, [input, inputValue, password]);

    return (
        <div className={styles.container}>
            <div 
            className={`${styles.passwordInput} ${isMatching == false && styles.shake}`} 
            style={{ borderColor: borderColor }}
            >
                <FontAwesomeIcon 
                icon={faLock}
                style={{ color: iconColor }}
                className={styles.lockIcon} 
                />
                <input
                type={viewPassword ? "text" : "password"}
                placeholder="Parolingizni qayta kiriting"
                ref={input}
                />
                {inputValue.length > 0 && (
                    <FontAwesomeIcon
                    icon={viewPassword ? faEye : faEyeSlash}
                    onClick={() => setViewPassword(!viewPassword)}
                    style={{ color: iconColor }}
                    className={styles.eyeIcon}
                    />
                )}
            </div>
            {isMatching == false && 
            <p className={styles.errorMessage}>
                parollar mos kelmaydi
            </p>
            }
        </div>
    )
}

export default PasswordConfirmation;