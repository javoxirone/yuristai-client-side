import styles from "./ExistingUsername.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";

function ExistingUsername({ placeholder, existingUsername, setExistingUsername }) 
{
    const [borderColor, setBorderColor] = useState("#6a6a6a");
    const [userIconColor, setUserIconColor] = useState("#ffffff");
    
    const inputRef = useRef(null);

    useEffect(() => 
    {
        function handleFocus()
        {
            setBorderColor("#0d6efd");
            setUserIconColor("#0d6efd");         
        }

        function handleInput(e)
        {
            setExistingUsername(e.target.value);
        }

        function handleBlur()
        {
            setBorderColor("#6a6a6a");
            setUserIconColor("#ffffff");
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
    }, [inputRef, existingUsername]);

    return (
        <div className={styles.container}>
            <div
            className={styles.usernameInput}
            style={{ borderColor: borderColor }}
            >
                <FontAwesomeIcon 
                icon={faUser} 
                style={{ color: userIconColor }} 
                className={styles.userIcon} 
                />
                <input
                type="text"
                placeholder={placeholder}
                ref={inputRef}
                />
            </div>
        </div>
    )
}

export default ExistingUsername;