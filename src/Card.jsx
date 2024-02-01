/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Card.css";

export const Card = ({titulo, descripcion}) => {
  const [descprecios, reducirPrecio] = useState(descripcion);
  const [imagenUrl, setImagenUrl] = useState("");

  const API_TEMPLATE = `http://localhost:8080?titulo=${titulo}`;

  useEffect(()=>{
    
    fetch(API_TEMPLATE)
    .then(response => {
      if(response.ok){
        response.text()
        .then(res => {
          console.log("response de la api: "+res);
          setImagenUrl(res);
        })
      }
    })

  },[API_TEMPLATE])


    return(
      <div className="cuadro">
        <div className="cuadro-top">
            <img src={imagenUrl}/>
        </div>
        <div className="cuadro-bottom"> 
            <h3>{titulo}</h3>
            <p>{descprecios}</p>
            <button onClick={() => reducirPrecio("600 - 1200")}>Reducir precio</button>
        </div>
      </div>
    )
  }
