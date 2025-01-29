import React from 'react'
import styles from './banner.module.css'

const Banner = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Menu</div>
        <div className={styles.discription}>
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
        </div>
      </div>

    </div>
  )
}

export default Banner