import React from 'react';

export function MostrarProyectos(props) {
    return (
        <div className='contenedor_proyecto'>
          <p className='lista_proyecto'>Proyecto ID#{props.proyectoid} </p>
          <p className='estado_proyecto'>Estado: {props.estado} </p>   
          <p className='descripcion_proyecto'>Descripción:{props.descripcion} </p>            
        </div>
    )    
}


