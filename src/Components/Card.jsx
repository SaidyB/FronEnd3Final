import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useDoctorStates } from "../Context";

const Card = ({ item, name, username, id }) => {

  const { state, dispatch } = useDoctorStates()

 
  const addFav = ()=>{

    let agregar=true;
    let borrar=false;
    state.favoritos.map((doc)=>{
      if(doc.id==id){
        return agregar=false, borrar=true;
      }
      
    })

    console.log(borrar)

    if(agregar==true){
      dispatch({type: 'SET_FAVS', payload: item})
    }

    if(borrar==true){
      dispatch({type:'DELETE_FAVS', payload: id})
    }

    
    
    //dispatch({type: 'SET_FAVS', payload: item})
    

    // Aqui iria la logica para agregar la Card en el localStorage
  }

  

  return (

    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`${routes.detalles}/${id}`}>
          <img src="images/doctor.jpg" alt="doctor" width={200}/>
          <h2>{id}</h2>
          <h2>{name}</h2>
          <h3>Nombre de usuario: {username}</h3>
          
        </Link>

        <button onMouseOver={(event) => event.target.style.backgroundColor = '#e0ffff'}
          onMouseOut={(event) => event.target.style.backgroundColor = ''} onClick={addFav} className="favButton"> ⭐</button>
        

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
