import styles from "./Password.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Password({ handlePassword, value, border, viewPassword, setViewPassword }) 
{
    return (
        <div style={{ border : border }} className={styles.passwordForm}>
            <FontAwesomeIcon icon={faLock} className={styles.lockIcon} />
            <input
              value={value}
              type={viewPassword ? "text" : "password"}
              placeholder="Parol yarating"
              onChange={handlePassword}
            />
            {value.length > 0 && (
                <FontAwesomeIcon
                  icon={viewPassword ? faEye : faEyeSlash}
                  onClick={() => setViewPassword(!viewPassword)}
                  className={styles.eyeIcon}
                />
            )}
        </div>
    )
}

Password.defaultProps = {
    border : "2px solid #6a6a6a"
}
