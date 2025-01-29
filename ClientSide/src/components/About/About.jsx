import React from 'react'
import styles from './about.module.css'
import logo from '../../assets/blacklogo.jpeg'
import { CiLocationOn, CiMail, CiTwitter } from 'react-icons/ci'
import { GiRotaryPhone } from 'react-icons/gi'
import { TbBrandFacebook } from 'react-icons/tb'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { IoLogoInstagram } from 'react-icons/io'

const About= () => {
   return (
      <>
         <div className={styles.wrapper}>

            <div className={styles.activeInMob}>
               <div className={styles.logo}><img src={logo} alt="" /></div>
               <div className={styles.webName}><span className={styles.deep}>DEEP</span>  NET <span className={styles.soft}>SOFT</span></div>
               <div className={styles.icons_s}><TbBrandFacebook /><CiTwitter /><PiYoutubeLogoLight /><IoLogoInstagram /></div>
            </div>

            <div className={styles.about}>
               <div className={styles.headName}><span>Connect with Us</span></div>
               <div className={styles.phoneAndMail}>
                  <div className={styles.aboutcontent}><span className={styles.icon}><GiRotaryPhone /></span> +91 9567843340</div>
                  <div className={styles.aboutcontent}><span className={styles.icon}><CiMail /></span> info@deepnetsoft.com</div>
               </div>
            </div>
            <div className={`${styles.about} ${styles.hideInMob}`}>
               <div className={styles.logo}><img src={logo} alt="logo" /></div>
               <div className={styles.webName}><span className={styles.deep}>DEEP</span>  NET <span className={styles.soft}>SOFT</span></div>
               <div className={styles.icons_s}><TbBrandFacebook /><CiTwitter /><PiYoutubeLogoLight /><IoLogoInstagram /></div>
            </div>
            <div className={styles.about}>
               <div className={styles.headName}>find Us</div>
               <div className={styles.aboutcontent}><span className={styles.icon}> <CiLocationOn /></span>First floor, Geo infopark, Infopark EXPY, Kakkanad</div>
            </div>
         </div>
         <div className={styles.footer}>
            <div className={styles.section}>© 2024 Deepnetsoft Solutions. All rights reserved.</div>
            <div className={styles.section}>
               <span>
                  Terms & Conditions
               </span>
               <span> Privacy Policy</span>
            </div>
         </div>
      </>
   )
}

export default About