import React from "react";

function BarraBotones() {
    return (
      <div>
				<div id='barra'>
					<p>Enviar Reportes de la obra:</p>
					<form id='casillas_para_enviar'>
						<label htmlFor='enviar_planos'>Planos</label>
						<input type='radio' id='planos'></input>
						<label htmlFor='enviar_materiales'>Materiales</label>
						<input type='radio' id='materiales'></input>
						<label htmlFor='enviar_liberaciones'>Liberaciones</label>
						<input type='radio' id='liberaciones'></input>
					</form>
					<form id='barra_boton'>
						<label htmlFor='correo'>Ingresa un correo valido: </label>
						<input type='email' id='correo'></input>
						<button type='button'>Enviar</button>	
					</form>
				</div>	
			</div>
    )
}

export default BarraBotones;