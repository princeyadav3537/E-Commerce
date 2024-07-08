import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewProduct() {
  let [data, setData] = useState([])
  let {id} = useParams()
  console.log(id)
  

  async function getDataBYId(){
      let result  = await axios.get(`http://localhost:9000/api/getProductById/${id}`)
      setData(result.data)
  }
  useEffect(()=>{
getDataBYId()
  },[])
  return (
<>
<div>
  {data.map((data)=>(
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold">Product Brand:- <span className='text-bold text-2xl'>{data.productBrand}</span></h1>
      <h1 className="text-lg font-semibold">Product Price:- <span className='text-bold text-2xl'>{data.productPrice}</span></h1>
      <h1 className="text-lg font-semibold">Product Rating:- <span className='text-bold text-2xl'>{data.productRating}</span></h1>
      <h1 className="text-lg font-semibold">Product Type:- <span className='text-bold text-2xl'>{data.productType}</span></h1>
          
           
       
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
  ))}
</div>
</>
  )
}
