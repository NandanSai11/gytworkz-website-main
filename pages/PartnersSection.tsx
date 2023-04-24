import Partner from '@/components/Partner'
import styles from '../styles/Home.module.css'

const PartnersSection = ({partners}: {partners: Array<object>}) => {

  return (
    <div className={styles.partnersSection}>
        <div className={styles.partnersHeader}>
            <h1>Trusted By</h1>
            <h6>We work with you, not for you.</h6>
        </div>
        <ul className={styles.partnersMain}>{partners?.map((partner:any, index:number)=>(
            <Partner key={index} img={partner.fields.logo} name={partner.fields.title} />
        ))}</ul>
    </div>
  )
}

export default PartnersSection