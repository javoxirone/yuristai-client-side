import styles from "./TarrifPlans.module.css"
import TariffPlanCard from "../../components/TarrifPlanCard/TariffPlanCard.jsx"

export default function TariffPlansPage() {
  return (
    <div className={styles.tariffsPage}>
      <div className={styles.heading}>
        <h1>Tarifni Tanlang</h1>
      </div>
      <div className={styles.tariffPlans}>
        <TariffPlanCard
          planName="Bepul"
          price="$0"
          promptsPerMonth={3}
          promptsPerDay={1}
          voiceRecognition={false}
          exportFeature={false}
        />
        <TariffPlanCard
          planName="Standart"
          price="$3"
          promptsPerMonth={9}
          promptsPerDay={3}
          voiceRecognition={true}
          exportFeature={false}
        />
        <TariffPlanCard
          planName="Premium"
          price="$6"
          promptsPerMonth={15}
          promptsPerDay={5}
          voiceRecognition={true}
          exportFeature={true}
        />
      </div>
    </div>
  )
}
