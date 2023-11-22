import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Tariff({ planName, price, promptsPerMonth, promptsPerDay, voiceRecognition, exportFeature }) 
{
  return (
    <div className={styles.tariffPlanCard}>
        <div className={styles.tariffName}>
          <h1>{planName}</h1>
        </div>
        <div className={styles.price}>
          <h2>{price}</h2>
        </div>
        <div className={styles.tariffPlanDescription}>
          <ul className={styles.list}>
            <li>Har oyda <b>{promptsPerMonth}</b> ta bepul savol</li>
            <li>Kuniga <b>{promptsPerDay}</b> ta savol</li>
            <li style={{ textDecoration: !voiceRecognition && "line-through"}}>Ovozni aniqlash</li>
            <li style={{ textDecoration: !exportFeature && "line-through"}}>Suhbatlarni (PDF, DOCX) sifatida saqlash imkoniyati</li>
          </ul>
        </div>
        <div className={styles.chooseButtonContainer}>
          <button className={styles.chooseButton}>Tariffni Tanlash</button>
        </div>
    </div>
  )
}