import styles from "./ExistingPassword.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef, useContext } from "react";

export default function ExistingPassword({ placeholder, existingPassword, setExistingPassword }) 
{
    const [borderColor, setBorderColor] = useState("#6a6a6a");
    const [iconColor, setIconColor] = useState("#ffffff");
    const [viewPassword, setViewPassword] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        function handleInput(e)
        {
            setExistingPassword(e.target.value);
        }

        function handleFocus()
        {
            setBorderColor("#0d6efd");
            setIconColor("#0d6efd");
        }

        function handleBlur() 
        {
            setBorderColor("#6a6a6a");
            setIconColor("#ffffff");
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
    }, [inputRef, existingPassword]);

    return (
        <div className={styles.container}>
            <div 
            className={styles.passwordInput} 
            style={{ borderColor: borderColor }}
            >
                <FontAwesomeIcon 
                icon={faLock}
                style={{ color: iconColor }}
                className={styles.lockIcon} 
                />
                <input
                type={viewPassword ? "text" : "password"}
                placeholder={placeholder}
                ref={inputRef}
                />
                {existingPassword.length > 0 && (
                    <FontAwesomeIcon
                    icon={viewPassword ? faEye : faEyeSlash}
                    onMouseDown={() => setViewPassword(!viewPassword)}
                    style={{ color: iconColor }}
                    className={styles.eyeIcon}
                    />
                )}
            </div>
        </div>
    )
}
