import React,{useState} from 'react'
import './Fitnes.css'
import { enterdata } from '../../data'


export default function Fitnes() {
  const [first, setfirst] = useState(enterdata)
  return (
    <div className='ota'>
      <div className='bosh_img d-flex justify-content-center align-items-center'>
            <h1 className='text-white'>NUESTRO EQUIPO</h1>
        </div>
    
        <div className='Aqui'>
            <h1>OBTÉN HASTA 3 DÍAS DE GIMNASIO GRATIS</h1>
            <button>AQUI</button>
        </div>

        <div className='fitnes_name pt-3 pb-5'>
             <h1 style={{textAlign:'center' , color:'white' , font:'48px' , fontFamily:'Agency FB'}}>CONOCE NUESTRO EQUIPO</h1>
            
                <div className='d-flex flex-wrap justify-content-center'>
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
        </div>

    </div>
  )
}