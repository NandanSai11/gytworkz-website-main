import styles from '../styles/Home.module.css'

type Props = {}

const LandingSection = (props: Props) => {
  return (
    <div className={styles.landingSection}>
        <h1 className={styles.landingHeading}>Knowledge. Quality. Agility</h1>
        <h6 className={styles.landingText}>Qualities that define us and, <b>the prize is huge</b> - you be the <b>fastest mover</b> in the market so achieve<b> lasting success</b>.</h6>
    </div>
  )
}

export default LandingSection