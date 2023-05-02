import React from 'react'
import './Clases.css'
import '../contact/Contact.css'
const Clases = () => {
  return (
    <>
    <div>
      <section className='clases_bg '>
        <h1 className='text-white d-flex justify-content-center align-items-center h-100'>AGENDA TU CLASE</h1>
      </section>
      <div className='d-flex align-items-center w-100 justify-content-around py-2' style={{backgroundColor:'#09A2F9'}}>
        <h2 className='text-white'>OBTÉN HASTA 3 DÍAS DE GIMNASIO GRATIS</h2>
        <button className='btn_anora text-white'>AQUI</button>
      </div>
      <section className='bg-black'>
        <h3 className='text-white py-5 text-center'>PUEDES ASISTIR AL GYM DE <span className='text-primary fs-3'>6:00</span> AM HASTA LAS <span className='fs-3 text-primary'>20:00</span> PM</h3>
        <h1 className='text-white text-center pb-5'>OTRAS CLASES</h1>
        <div className=" d-flex justify-content-center px-4">
        <table className="table w-75 bg-white">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">LUNES</th>
      <th scope="col">MARTES</th>
      <th scope="col">MIERCOLES</th>
      <th scope="col">JUEVES</th>
      <th scope="col">VIERNES</th>
      <th scope="col">SABADO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1:00 PM</th>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3:00 PM</th>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
    </tr>
    <tr>
      <th scope="row">6:00 PM</th>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
      <td>CROSSFIT</td>
    </tr>
    <tr>
      <th scope="row">7:00 PM</th>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">8:00 PM</th>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
      <td>CROSSFIT</td>
      <td></td>
    </tr>
  </tbody>
</table>
        </div>
      </section>
    </div>
    </>
  )
}

export default Clases
