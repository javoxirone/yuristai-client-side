import styles from "./Password.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef, useContext } from "react";
import { conditions } from "../../utils/conditions.js";
import AuthContext from "../../context/AuthContext";

function Password({ isPasswordValid, setIsPasswordValid }) 
{
    const [borderColor, setBorderColor] = useState("#6a6a6a");
    const [iconColor, setIconColor] = useState("#ffffff");
    const [viewPassword, setViewPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { password, setPassword } = useContext(AuthContext);

    const inputRef = useRef(null);

    useEffect(() => 
    {
        function handleChange(e) 
        {
            setPassword(e.target.value);
            
            for (let i = 0; i < conditions.length; i++)
            {
                if (!conditions[i].regex.test(e.target.value))
                {
                    setErrorMessage(conditions[i].message);
                    setBorderColor("#ed4337");
                    setIconColor("#ed4337");
                    setIsPasswordValid(false);

                    break;
                } else 
                {
                    setBorderColor("#4bb543" );
                    setIconColor("#4bb543" );
                    setIsPasswordValid(true);
                }
            }
        }

        function handleInput(e)
        {
            setPassword(e.target.value);
        }

        function handleFocus()
        {
            setBorderColor("#0d6efd");
            setIconColor("#0d6efd");
        }

        function handleBlur() 
        {
            if (password.length > 0) 
            {
                for (let i = 0; i < conditions.length; i++)
                {
                    if (!conditions[i].regex.test(password))
                    {
                        setErrorMessage(conditions[i].message);
                        setBorderColor("#ed4337");
                        setIconColor("#ed4337");
                        setIsPasswordValid(false);

                        break;
                    } else 
                    {
                        setBorderColor("#4bb543");
                        setIconColor("#4bb543");
                        setIsPasswordValid(true);
                    }
                }

                inputRef.current.removeEventListener("focus", handleFocus);
                inputRef.current.removeEventListener("input", handleInput);
                inputRef.current.removeEventListener("blur", handleBlur);

                inputRef.current.addEventListener("input", handleChange);
            } else 
            {
                setBorderColor("#6a6a6a");
                setIconColor("#ffffff");
            }
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
    }, [password]);

    return (
        <div className={styles.container}>
            <div 
            className={`${styles.passwordInput} ${isPasswordValid === false && styles.shake}`} 
            style={{ borderColor: borderColor }}
            >
                <FontAwesomeIcon 
                icon={faLock}
                style={{ color: iconColor }}
                className={styles.lockIcon} 
                />
                <input
                type={viewPassword ? "text" : "password"}
                placeholder="Parol yarating"
                ref={inputRef}
                />
                {password.length > 0 && (
                    <FontAwesomeIcon
                    icon={viewPassword ? faEye : faEyeSlash}
                    onMouseDown={() => setViewPassword(!viewPassword)}
                    style={{ color: iconColor }}
                    className={styles.eyeIcon}
                    />
                )}
            </div>
            {isPasswordValid == false && 
            <p className={styles.errorMessage}>
                {errorMessage}
            </p>
            }
        </div>
    )
}

export default Password;