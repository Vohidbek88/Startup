import React from 'react'
import './Contact.css'
import '../navpart/nav.css'
const Contact = () => {
  return (
    <>
    <div>
      <section className='contact_bg'>
        <h1 className='text-white d-flex justify-content-center align-items-center h-100'>CONTACTANOS</h1>
      </section>
      <div className='d-flex align-items-center w-100 justify-content-around py-2' style={{backgroundColor:'#09A2F9'}}>
        <h2 className='text-white'>OBTÉN HASTA 3 DÍAS DE GIMNASIO GRATIS</h2>
        <button className='btn_anora text-white'>AQUI</button>
      </div>
      <section className='bg-dark pb-5'>
        <h1 className='text-center text-white pt-2 pb-3'>CONTACTANOS</h1>
        <div className='d-flex flex-column w-75 m-auto'>
          <div>
            <h4 className='text-white'>Nombre</h4>
            <input type="text" className='form-control'/>
          </div>
          <div className='py-3'>
            <h4 className='text-white'>Apellido</h4>
            <input type="text"  className='form-control'/>
          </div>
          <div>
            <h4 className='text-white'>Telefono</h4>
            <input type="text"  className='form-control'/>
          </div>
          <div className='py-3'>
            <h4 className='text-white'>Email</h4>
            <input type="text"  className='form-control'/>
          </div>
          <div className='d-flex justify-content-center mt-3'><button className='btn_env'>Enviar</button></div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Contact
