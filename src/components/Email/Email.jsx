import styles from "./Email.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { emailRegex } from "../../pages/Registration/regex";

export default function Email({ isEmailValid, setIsEmailValid, placeholder }) 
{
    const [borderColor, setBorderColor] = useState("#6a6a6a");
    const [iconColor, setIconColor] = useState("#ffffff");
    const { email, setEmail } = useContext(AuthContext);

    const inputRef = useRef(null);

    useEffect(() => {
        function handleChange(e) 
        {
            setEmail(e.target.value);

            setBorderColor(
                emailRegex.test(e.target.value) ? "#4bb543" : "#ed4337"
            );

            setIconColor(
                emailRegex.test(e.target.value) ? "#4bb543" : "#ed4337"
            );

            setIsEmailValid(
                emailRegex.test(e.target.value)
            );
        }

        function handleFocus()
        {
            setBorderColor("#0d6efd");
            setIconColor("#0d6efd");
        }

        function handleInput(e)
        {
            setEmail(e.target.value);
        }

        function handleBlur() 
        {
            if (email.length > 0)
            {
                setBorderColor(
                    emailRegex.test(email) ? "#4bb543" : "#ed4337"
                );

                setIconColor(
                    emailRegex.test(email) ? "#4bb543" : "#ed4337"
                );

                setIsEmailValid(
                    emailRegex.test(email)
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
    }, [email]);

    return (
        <div className={styles.container}>
            <div
            className={`${styles.emailInput} ${isEmailValid == false && styles.shake}`} 
            style={{ borderColor: borderColor }}
            >
                <FontAwesomeIcon 
                icon={faEnvelope} 
                className={styles.icon} 
                style={{ color: iconColor }}
                />
                <input
                type="text"
                placeholder="Elektron pochtangizni kiriting"
                ref={inputRef}
                />
            </div>
            {isEmailValid == false && 
            <p className={styles.errorMessage}>
                Elektron pochta formati noto`g`ri
            </p>
            }
        </div>
    )
}

Email.defaultProps = {
    border : "2px solid #6a6a6a"
}