import React from 'react';

export function MostrarProyectos(props) {
    return (
        <div className='contenedor_proyecto'>
          <p className='lista_proyecto'>Proyecto ID#{props.proyectoid} </p>
          <p className='estado_proyecto'><strong>Estado:</strong> {props.estado} </p>   
          <p className='descripcion_proyecto'><strong>Descripción:</strong>  {props.descripcion} </p>
          <br/>
          <div className='contenedor_materiales'>
            <p className='planos'><strong>Planos:</strong> {props.planos} </p>
            <p className='materiales'><strong>Materiales:</strong> {props.materiales} </p>
          </div>
          
                      
        </div>
    )    
}


