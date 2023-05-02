import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import '../navpart/nav.css'
const Footer = () => {
  return (
    <>
    <div className='bg-black'>
        <section className='d-flex justify-content-center py-5'>

            <div style={{width:'25%'}}>
                <Link to={'/'}>
                <img src="/imgs/logo 1.png" alt="logo" />
                </Link>
                <p className='text-white mt-3'>Ofrecemos la posibilidad de realizar actividades deportivas: Crossfit, Boxeo, Gym y Otros, en pro de mejorar tú de salud y resistencia fisica, a través de un sistema de entrenamiento 100% profesional.</p>
            </div>

            <ul className='d-flex flex-column footer_li mx-5 list-unstyled' style={{width:'25%'}}>
                <li><h1 className='nav_fot_h1 mb-5'>INFORMACION</h1></li>
                <li><Link to={'/main'} className='link'>HOME</Link></li>
                <li><Link to={'/entered'} className='link'>ENTRENADORES</Link></li>
                <li><Link to={'/products'} className='link'>PRODUCTOS</Link></li>
                <li><Link to={'/clases'} className='link'>CLASES</Link></li>
                <li><Link to={'/contact'} className='link'>CONTACTO</Link></li>
            </ul>
            <div style={{width:'25%'}}>
                <h1 className='nav_fot_h1'>SUSCRIBETE</h1>
                <input type="email" placeholder='EMAIL' className='inp_subs mb-3 mt-5'/>
                <button className='btn_subs'>SUBSCRIBE</button>
            </div>
        </section>
       <div style={{width:'90%',height:'1px',backgroundColor:'#909090',textAlign:'center',margin:'auto'}}></div>
    <section className='d-flex justify-content-between text-center' style={{width:'90%',padding:'40px 0',margin:'auto'}}>
       <div>
       <span>Copyright @ 2022 All Rights Reserved.</span>
        <span>+555 55 5555</span>
        <span>info@gym.com</span>
        <span>Santiago, Chile</span>
       </div>
       <div className='icon_socila'>
       <i className="fa-brands fa-facebook"></i>
       <i className="fa-brands fa-instagram"></i>
       <i className="fa-brands fa-twitter"></i>
       <i className="fa-brands fa-youtube"></i>
       </div>

    </section>
    </div>
    </>
  )
}

export default Footer
