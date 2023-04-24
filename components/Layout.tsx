import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import footerStyles from '../styles/Footer.module.css'
import LongFooter from './LongFooter'
import FacebookIcon from "../public/icons8-facebook.svg"
import LinkedinIcon from "../public/icons8-linkedin.svg"
import Image from 'next/image'

// type Props = {}

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
      <LongFooter />
      <div className={footerStyles.copyrightSection}>
          <h6>
            Copyright © 2020 GYTWorkz. All rights reserved.
          </h6>
          <div className={footerStyles.copyrightMain}>
            <Image src={FacebookIcon} alt="Social Link" />
            <Image src={LinkedinIcon} alt="Social Link" />
          </div>
      </div>
    </>
  )
}

export default Layout