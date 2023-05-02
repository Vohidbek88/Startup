import React, { useState,useEffect } from 'react'
import './Products.css'
import { carddata } from '../../data'
const Products = () => {
    const[cards,Setcards]=useState([...carddata])

    const[close,Setclose]=useState(false)
   
    const [CARTA, setCARTA] = useState([])
   


   const[cart,Setcart]=useState([])



    
   console.log(cart);
   function addTocart(data){
     console.log(data);
     Setcart([...cart, {...data,quanitity:1}])
   }

   useEffect(() => {
   setCARTA(cart)
   }, [cart])
   
function Del(i){
  CARTA.splice(i,1)
  setCARTA(CARTA)
  console.log(CARTA);
}
  return (
   <>
    <div>
    <section className='bg_product position-relative'>
    <i className="fa-solid fa-cart-shopping icon_carts" onClick={()=>Setclose(!close)}><span>{cart.length}</span></i>
        <h1 className='text-white d-flex text-center justify-content-center align-items-center h-100'>CONOCER NUESTROS <br /> RODUCTOS</h1>
        <div className={`cards_s ${close ?"d-block":'d-none'}`}>
            <section className='p-2'>
             
               <div>
               {
                CARTA?.map((arr,cartindex)=>{
                 return(
                     <div key={cartindex} className='d-flex align-items-center mt-2'>
                         <img src={arr.url} alt="aa" width={100}/>
                         <span>{arr.name}</span>
                         <button className='btn btn-warning' onClick={()=>{
                             const _CART=CARTA.map((arr,index)=>{
                                 return cartindex===index ? {...arr, quanitity:arr.quanitity>0 ? arr.quanitity-1:0}:arr
                             })
                             setCARTA(_CART)
                         }}>-</button>
                         <span>{arr.quanitity} ta</span>
                         <button className='btn btn-success' onClick={()=>{
                             const _CART=CARTA.map((arr,index)=>{
                                 return cartindex===index ? {...arr, quanitity:arr.quanitity+1}:arr
                             })
                             setCARTA(_CART)
                         }}>+</button>
                         <span>${ 1*(arr.price)*arr.quanitity}</span>
                         <button className='btn btn-danger' onClick={()=>Del(cartindex)}>O'chirish</button>
                     </div>
                 )
                })
               }
               <p className='fs-4'>
                 Summ:
                 {
                     CARTA.map((arr=>(arr.price)*1*arr.quanitity)).reduce((total,value)=>total+value,0)
                 }
               </p>
             </div>
             
            </section>
        </div>
    </section>
    <div className='d-flex align-items-center w-100 justify-content-around py-2' style={{backgroundColor:'#09A2F9'}}>
        <h2 className='text-white'>OBTÉN HASTA 3 DÍAS DE GIMNASIO GRATIS</h2>
        <button className='btn_anora text-white'>AQUI</button>
      </div>
      <section className='bg-dark'>
        <h1 className='text-white text-center'>PRODUCTOS</h1>
        <div className='d-flex flex-wrap w-75 m-auto justify-content-center'>
           {
            cards.map((arr,index)=>{
                return(
                    <div key={index} className='card w-25 m-2' style={{backgroundColor:'#272727'}}>
                        <img src={arr.url} alt="p" />
                      <h3 className='text-white text-center py-2'>{arr.name}</h3>
                      <h4 style={{color:'#09A2F9',textAlign:'center'}}>{arr.price}</h4>
                      <button className='btn_card' onClick={()=>addTocart(arr)}>COMPRAR</button>
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

export default Products
