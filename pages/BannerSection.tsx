import LongCard from '@/components/reusable/LongCard'
import styles from '../styles/Home.module.css'
import Icon1 from '../public/icon1.svg'
import Icon2 from '../public/icon2.svg'
import Icon3 from '../public/icon3.svg'

type Props = {}

const BannerSection = (props: Props) => {
  return (
    <div className={styles.bannerSection}>
        <h1 className={styles.bannerHeading}>Competence <br/>Areas</h1>
        <div className={styles.bannerMain}>
          <LongCard heading="Future Vision." icon={Icon1} description="We intend to establish a trusted partnership with our clients by providing the best of tech solutions.  We combine quality with innovation to establish ourselves as the new-age tech solutions company. We align with your requirements to ensure you find success and growth." color="#46d2a0"/>
          <LongCard heading="Product Design." icon={Icon2} description="We breathe Quality. Our range of products are a proof of what we can envision and create. Quality products at affordable pricing is our mantra. Our products are successful because they are born out of deep thought connected to understanding your requirements at the root-cause level." color="#b195f9"/>
          <LongCard heading="Innovative Solutions." icon={Icon3} description="We wish to create an impact. Our approach is to come up with innovative solutions that address all your needs and solve your problems. At GYTWorkz, Quality and Innovation go hand-in-hand creating a sure shot recipe for success." color="#fea046"/>
        </div>
    </div>
  )
}

export default BannerSection