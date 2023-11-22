import styles from "./styles.module.css";
import Tariff from "../TarrifPlan/Tariff.jsx";

export default function Tariffs() 
{
  return (
    <div className={styles.tariffsPage}>
      <div className={styles.heading}>
        <h1>Tarifni Tanlang</h1>
      </div>
      <div className={styles.tariffPlans}>
        <Tariff planName="Bepul" price="$0" promptsPerMonth={3} promptsPerDay={1} voiceRecognition={false} exportFeature={false} />
        <Tariff planName="Asosiy" price="$2" promptsPerMonth={5} promptsPerDay={1} voiceRecognition={false} exportFeature={false} />
        <Tariff planName="Standart" price="$4" promptsPerMonth={9} promptsPerDay={3} voiceRecognition={true} exportFeature={false} />
        <Tariff planName="Premium" price="$6" promptsPerMonth={15} promptsPerDay={5} voiceRecognition={true} exportFeature={true} />
      </div>
    </div>
  )
}
