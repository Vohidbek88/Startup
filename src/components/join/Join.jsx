import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Join = () => {
    const[close,Setclose]=useState(false)
    const[nul,Setnull]=useState()
    const navigat=useNavigate()
    function Submit(){
        Setclose(!close)
        Setnull()
    }
  return (
   
    <>
    <div className='d-flex flex-column d-flex w-50 m-auto text-center p-5'>
        <h1>Qo'shilish uchun email manzilingizni jo'nating!</h1>
      <input type="email" className='form-control mb-4' placeholder='Email'  value={nul}/>
      <button type='submit' className='btn btn-success mb-4' onClick={Submit}>Jo'natish</button>
      <div className={`position-absolute bg-warning p-2 ${close ? 'd-block':'d-none'}`} style={{right:'10px',borderRadius:'10px',top:'100px',transition:'all .4s ease'}}>
       <h4> Muaffaqiyatli Jo'natildi!</h4>
       <button className='btn btn-success' onClick={()=>Setclose(!close)}>Ok</button>
      </div>
      </div>
    </>
  )
}

export default Join
