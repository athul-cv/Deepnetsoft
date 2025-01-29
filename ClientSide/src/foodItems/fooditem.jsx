import React from 'react'
import styles from './fooditem.module.css'



const Item = ({ name, price, description,index }) => {
  return (
    <div className={styles.menu_item} key={index}>
      <div className={styles.menu_header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.dots}></span>
        <span className={styles.price}>${price}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>

  )

}

export default Item