import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useDoctorStates } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useDoctorStates();
 

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.doctorList.map((item) => <Card key={item.id} item={item} id={item.id} name={item.name} username={item.username}/>)
        
        }
      </div>
    </main>
  )
}

export default Home