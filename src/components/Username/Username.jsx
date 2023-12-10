import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";


export default function Username({ border, value, handleUsername, name }) 
{
    const usernameStyles = {
        border : border
    }

    return (
        <div className={styles.usernameForm} style={usernameStyles}>
            <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
            <input
                value={value}
                type="text"
                placeholder="Username-ni kiriting"
                onChange={handleUsername}
                name={name}
            />
        </div>
    )
}

Username.defaultProps = {
    border : "2px solid #6a6a6a"
}