import React from 'react'
import styles from './menubar.module.css'



const MenuBar = ({ menulist, selectedMenu, setselectedMenu }) => {
  return (
    <div className={styles.container}>
      {menulist.length >= 1 && menulist.map((menu, index) => (
        <button className={`${styles.items} ${selectedMenu?._id == menu._id ? styles.active : undefined}`} key={index} onClick={() => setselectedMenu(menu)}  >{menu.menuname}</button>
      ))
      }
    </div>
  )
}

export default MenuBar