import React from 'react'
import './style.css'
import MyButton from '../MyButton'
const NavBar = () => {
  return (
    <div className='NavBar'>
    <MyButton Name="Shop Now"/>
    <MyButton Name="Contact Us"/>
    <MyButton Name="About Us"/>
    </div>
  )
}
export default NavBar
