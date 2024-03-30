import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const params= useParams()
  const [doctor, setDoctor]= useState({})
  const url= `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=>{
    axios(url)
    .then(res=> setDoctor(res.data))
  },[])

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
    
    <div className='card-grid'>
      <div className='card'>
        <h1>Detalles</h1>
        <h1>{doctor.id}</h1>
        <h2>{doctor.name}</h2>
        <h3>{doctor.email}</h3>
        <h3>{doctor.phone}</h3>
        <h3>{doctor.website}</h3>
      </div>
    </div>
      
    
      
    
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail