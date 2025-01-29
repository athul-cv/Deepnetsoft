import React, { useState } from 'react';
import styles from './navbar.module.css';
import logo from '../../assets/whitelogo.jpeg'
import { IoMenu } from 'react-icons/io5';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>

      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <img src={logo} alt="logo.png" />
        </div>
        <div className={styles.webNameSection}>
          <div className={styles.deepnet}> <span className={styles.deep}>Deep</span> Net</div>
          <div className={styles.soft}>Soft</div>
        </div>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <IoMenu />
      </div>

      <div
        className={`${styles.navItems} ${menuOpen ? styles.active : ''}`}>
        <div className={styles.navitem}>Home</div>
        <div className={styles.navmenu}>Menu</div>
        <div className={styles.navitem}>Make a Reservation</div>
        <div className={styles.navitem}>Contact Us</div>
      </div>
    </div>
  );
};

export default NavBar;