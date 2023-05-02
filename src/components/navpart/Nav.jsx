import React from 'react'
import './nav.css'
import { Link,Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
const Nav = () => {
  return (
    <>
    <div className='d-flex justify-content-center'>
      <nav className='nav_part d-flex align-items-center w-100 justify-content-between px-2 py-2'>

        <div>
           <Link to={'/main'}><img src="/imgs/logo 1.png" alt="logo" /></Link>
        </div>

        <ul className='nav_link d-flex align-items-center'>
            <li><Link to={'/main'} className='link'>HOME</Link></li>
            <li><Link to={'/entered'} className='link'>ENTRENADOR</Link></li>
            <li><Link to={'/products'} className='link'>PRODUCTOS</Link></li>
            <li><Link to={'/clases'} className='link'>CLASES</Link></li>
            <li><Link to={'/contact'} className='link'>CONTACTOS</Link></li>
            <li><button className='btn_anora'><Link to={'/join'} className='btn_link'>UNETE AHORA</Link></button></li>
        </ul>

      </nav>
    </div>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Nav
