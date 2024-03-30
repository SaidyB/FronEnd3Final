import React from "react";
import Card from "../Components/Card";
import { useDoctorStates } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useDoctorStates();

  return (
    <>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
        {
          state.favoritos.map((item)=> <Card key={item.id} name={item.name} id={item.id} username={item.username}/>)
        }
      </div>
    </>
  );
};

export default Favs;
