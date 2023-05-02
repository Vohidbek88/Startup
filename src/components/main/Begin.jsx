import React,{useState} from 'react'
import './Begin.css'
import '../navpart/nav.css'
import '../contact/Contact.css'
import { maindata } from '../../data'
import '../enterend/Fitnes.css'
import { Link } from 'react-router-dom'

const Begin = () => {
  const [first, setfirst] = useState(maindata)

  return (
    <>
      <div>
        <section className='main_bg'>
          <div className='' style={{ paddingTop: '120px', paddingLeft: '150px' }}>
            <h1 className='text-white' style={{ lineHeight: '80px', fontSize: '50px' }}>VEN A FORTALECER TU <br /> CUERPO Y ESTADO FISICO <br /> CON PROFESIONALES</h1>
            <button className='ms-5 btn_anora text-white mt-3 text-center'><Link to={'/join'} className='btn_link'>UNETE AHORA</Link></button>
          </div>
        </section>
        <div className='d-flex align-items-center w-100 justify-content-around py-2' style={{ backgroundColor: '#09A2F9' }}>
          <h2 className='text-white'>OBTÉN HASTA 3 DÍAS DE GIMNASIO GRATIS</h2>
          <button className='btn_anora text-white'>AQUI</button>
        </div>
        <div className='parda'>
          <section className='main_bg2'>
            <div>
              <h1 className='text-white' style={{ paddingTop: '50px', marginLeft: '50px' }}>UNA GRAN <br /> OFERTA PARA <br />
                ESTE VERANO</h1>
              <h3 className='text-primary' style={{ paddingTop: '40px', marginLeft: '170px' }}>50% rebajado</h3>
              <button className='btn_anora text-white mt-5 text-center' style={{ marginLeft: '220px' }}>UNETE AHORA</button>
            </div>
          </section>
        </div>

        <section className='bg-dark'>
          <h1 className='text-center text-white pt-3 pb-4'>NUESTROS PRECIOS</h1>

          <div className='d-flex flex-wrap justify-content-center'>
            <div className="cardd text-center  m-3" style={{backgroundColor:'#272727',width:'30%'}}>
              <h4 className='text-white'>NUESTROS PRECIOS</h4>
              <h2 className='text-primary'>$20 <span className='text-primary'>mes</span></h2>
              <p className='text-white p-3'>Acceso ilimitado 24h
Entrenador personal
Casillero + Baño
Masaje 1 vez al mes</p>
<button className='bg-primary text-white mt-2' style={{borderRadius:'7px'}}>UNETE AHORA</button>
            </div> 
            
             <div className="cardd text-center  m-3" style={{backgroundColor:'#272727',width:'30%'}}>
              <h4 className='text-white'>PLAN MEDIOS</h4>
              <h2 className='text-primary'>$28 <span className='text-primary'>mes</span></h2>
              <p className='text-white p-3'>Acceso ilimitado 24h
Entrenador personal
Casillero + Baño
Masaje 1 vez al mes</p>
<button className='bg-primary text-white mt-2' style={{borderRadius:'7px'}}>UNETE AHORA</button>
            </div>


            <div className="cardd text-center  m-3" style={{backgroundColor:'#272727',width:'30%'}}>
              <h4 className='text-white'>PLAN PRO</h4>
              <h2 className='text-primary'>$35 <span className='text-primary'>mes</span></h2>
              <p className='text-white p-3'>Acceso ilimitado 24h
Entrenador personal
Casillero + Baño
Masaje 1 vez al mes</p>
<button className='bg-primary text-white mt-2' style={{borderRadius:'7px'}}>UNETE AHORA</button>
            </div>
          </div>
        </section>

        <section className='bg-black'>
          <h1 className='text-white text-center pt-5 pb-5'>CONOCE NUESTRO EQUIPO</h1>

          <div className='d-flex justify-content-center'>
            {
 first.map((arr,index)=>{
  return(
    <div key={index} className='cards mt-3 d-flex justify-content-center align-items-end' style={{backgroundImage:`url('${arr.img_url}')`,height:'500px',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
         <div className='text-white  gradient  d-flex text-center flex-column justify-content-end'>
          <h3>{arr.ismi}</h3>
          <h6>{arr.category}</h6>
         </div>
    </div>
  )
 })
            }
          </div>
        </section>

      </div>
    </>
  )
}

export default Begin
