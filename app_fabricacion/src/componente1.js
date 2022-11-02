import React from 'react';

export function MostrarProyectos(props) {
    return (
        <div className='contenedor_proyecto'><br></br>
          <p className='lista_proyecto'>Proyecto ID#{props.proyectoid} </p>
          <p className='estado_proyecto'><strong>Estado:</strong> {props.estado} </p>   
          <p className='descripcion_proyecto'><strong>Descripción:</strong>  {props.descripcion} </p>
          <br/>
          <div className='contenedor_materiales'>
            <p className='planos'><strong>Planos:</strong> {props.planos} </p>
            <p className='materiales'><strong>Materiales:</strong> {props.materiales} </p>
          </div>
          <div className='contenedor_trazabilidad'>
            <ul><p><strong>Documentación de la obra:</strong></p>
            <li><a href="#">Formato_trazabilidad_001.zip</a></li>
            <li><a href="#">Formato_trazabilidad_002.zip</a></li>
            <li><a href="#">Formato_trazabilidad_003.zip</a></li>
            <li><a href="#">Listado de liberaciones_001.txt</a></li>
            <li><a href="#">Listado de liberaciones_002.txt</a></li>
            <li><a href="#">Listado de liberaciones_003.txt</a></li>
            </ul> 
            
          </div>
          
                      
        </div>
    )    
}


