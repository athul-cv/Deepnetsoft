import React from 'react'
import styles from './menudetails.module.css'
import drink1 from '../../assets/mojito.png'
import drink2 from '../../assets/cocktail.png'
import Item from '../../foodItems/fooditem'



const MenuDetails= ({ selectedMenu, foodItems }) => {



    const selectedItem = selectedMenu && selectedMenu._id
        && foodItems.filter(item => item.menuid === selectedMenu._id);
    console.log(selectedItem);


    return (
        <div className={styles.container}>
            <div className={styles.sideimg}>
                <div className={styles.leftimg}></div>
            </div>
            <div className={styles.displayContainer}>
                <div className={styles.menuItemContainer}>
                    <div className={styles.titleSec}>
                        <div className={styles.img}><img src={drink1} alt="" /></div>
                        <div className={styles.title}><span className={styles.border}>
                        </span> <span className={styles.titleName}> {selectedMenu?.menudescription} </span> <span className={styles.border}></span></div>
                    </div>
                    <div className={styles.menu_grid}>
                        {selectedItem && selectedItem.map((item, index) => (
                            <Item name={item.foodname}
                            price={item.foodprice}
                            description={item.fooddescription} index={index}/>
                        ))
                        }
                    </div>
                    <div className={styles.menuimage}><img src={drink2} alt="" /></div>
                </div>
            </div>
            <div className={styles.sideimg}>
                <div className={styles.rightimg}></div>
            </div>
        </div>
    )
}

export default MenuDetails