import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useDoctorStates } from '../Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state,dispatch}=useDoctorStates()

  const handleTheme =()=>{
    dispatch({type:'CHANGE_THEME',payload:!state.dark})
  }
  console.log(state.dark)

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contacto}>Contacto</Link>
      <Link to={routes.favs}>Favoritos</Link>
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar