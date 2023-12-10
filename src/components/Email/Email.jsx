import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Email.module.css";

export default function Email({ handleEmail, value, border, name }) 
{
    return (
        <div style={{ border: border }} className={styles.emailForm}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.envelopeIcon} />
            <input
              value={value}
              type="text"
              placeholder="Email-ni kiriting"
              onChange={handleEmail}
              name={name}
            />
        </div>
    )
}

Email.defaultProps = {
    border : "2px solid #6a6a6a"
}