import React, { useLayoutEffect, useState } from 'react'
import styles from './app.module.css'
import axios from 'axios'
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import MenuBar from './components/menubar/MenuBar'
import MenuDetails from './components/MenuDetails/MenuDetails'
import About from './components/About/About'



const HomePage = () => {

  const [menulist, setMenulist] = useState([])
  const [fooditems, setFooditems] = useState([])
  const [selectedMenu, setSelectedMenu] = useState(null)




  useLayoutEffect(() => {

    const fetchdata = async () => {
      try {
        await axios.get("https://deepnetsoft-jr1q.vercel.app/Menuget").then((response) => {
          console.log(response.data);
          if (response && response.status == 200 && response.data) {
            setMenulist(response.data)
            setSelectedMenu(response.data[1])
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [])



  useLayoutEffect(() => {

    const fetchfooditems = async () => {
      try {
        await axios.get("https://deepnetsoft-jr1q.vercel.app/Foodget").then((response) => {
          console.log(response.data);
          if (response && response.status == 200 && response.data) {
            setFooditems(response.data)
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
    fetchfooditems();
  }, [])


  return (
    <>
        <div className={styles.container}>
            <NavBar/>
            <Banner/>
            <MenuBar menulist={menulist} selectedMenu={selectedMenu} setselectedMenu={setSelectedMenu}/>
            <MenuDetails selectedMenu={selectedMenu} foodItems={fooditems}/>
            <About/>
        </div> 
    </>
  )
}

export default HomePage