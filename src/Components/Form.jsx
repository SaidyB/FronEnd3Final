import React from "react";
import { useState } from "react";

const Form = () => {

  //Validaciones
  const validateUserName= (userName)=>{
    const sinEspacios= userName.trim();
    if (sinEspacios.length>=5){
      return true;
    } else{
      return false;
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateUserEmail= (userEmail)=>{
    if (emailPattern.test(userEmail)){
      return true;
    } else{
      return false;
    }
  }

  

  //States
  const [userName, setUserName]= useState("");
  const [userEmail, setUserEmail]= useState("");
  console.log(userEmail)

  const [mostrar, setMostrar]= useState(false)
  const [err, setErr] = useState(false)

  //Manejadores de eventos

  const handleSubmit= (e)=>{
    e.preventDefault();
    if (!validateUserEmail(userEmail) || !validateUserName(userName)){
      console.log(validateUserEmail(userEmail))
      console.log(validateUserName(userName))
      alert('error')
      setErr(true)
      
    }else{
      alert('gracias')
      setErr(false)
      setMostrar(true)
    }
  }

  const onChangeName= (e) => setUserName(e.target.value)
  const onChangeEmail= (e) => setUserEmail(e.target.value)


  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
          type="text"
          placeholder='Ingrese su nombre completo'
          value={userName}
          onChange={onChangeName}
          />
          <label>Email: </label>
          <input
          type="text"
          placeholder="Ingrese su Email"
          value={userEmail}
          onChange={onChangeEmail}/>
          
          <button type='submit'>Enviar</button>

        </form>

        {mostrar ? 
            <>
                <h4>Gracias, {userName}! te contactaremos cuando antes vía mail</h4>
            </>
        : <p>Coloque sus datos para contactarlo.</p>
        }
        {err && <h4 style={{color: 'red'}}>Por favor verifique su información nuevamente</h4>}
    </div>
  );
};

export default Form;
