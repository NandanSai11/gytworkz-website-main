import Image from 'next/image'
import footerStyles from '../styles/Footer.module.css'
import GYTLogo from '../public/gyt-logo-white.svg'
import FacebookIcon from "../public/icons8-facebook.svg"
import LinkedinIcon from "../public/icons8-linkedin.svg"

const LongFooter = () => {
  return (
    <div className={footerStyles.longFooter}>
        {/* <h1>Long Footer</h1> */}
        <div className={footerStyles.upperSection}>
          <Image src={GYTLogo} alt='GYT Logo'/>
        </div>
        <div className={footerStyles.lowerSection}>
          <div className={footerStyles.services}>
            <h5>
              SERVICES
            </h5>
            <div className={footerStyles.servicesMain}>
              <li>Product Development</li>
              <li>Data Engineering</li>
              <li>Machine Learning</li>
              <li>UI/UX</li>
              <li>AWS Cloud Native</li>
              <li>Chatbot Technology</li>
              <li>Application Infrastructure</li>
              <li>DevOps</li>
              <li>Team Augmentation</li>
            </div>
          </div>
          <div className={footerStyles.company}>
            <h5>
              COMPANY
            </h5>
            <div className={footerStyles.companyMain}>
              <li>About</li>
              <li>News & Media</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </div>
          </div>
          <div className={footerStyles.policy}>
            <h5>
              POLICY
            </h5>
            <div className={footerStyles.policyMain}>
              <li>Privacy Policy</li>
              <li>Code of Conduct</li>
              <li>Cookies Settings</li>
            </div>
          </div>
        </div>
        {/* <div className={footerStyles.copyrightSection}>
          <h6>
            Copyright © 2020 GYTWorkz. All rights reserved.
          </h6>
          <div className={footerStyles.copyrightMain}>
            <Image src={FacebookIcon} alt="Social Link" />
            <Image src={LinkedinIcon} alt="Social Link" />
          </div>
        </div> */}
    </div>
  )
}

export default LongFooter