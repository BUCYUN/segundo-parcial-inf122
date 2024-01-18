import React, { useState } from "react";
import '../styles/Mostrar.css';

function Mostrar ({meta, deleteM}) {

    return(
        <div className='contenedor-meta'>
                    <p className='meta'>{meta.temp} 
                        <div><button className='boton-borrar' onClick={() => deleteM(meta.id)}>
                                <img src="../images/icons/tash 1.svg" alt="" />eliminar
                            </button>
                            <button className="boton-completado" style={meta}>
                                <img src="../images/icons/check-circle 1.svg" alt="" />
                            </button>
                        </div>
                        
                    </p>

                    
                    
        </div>
    )
}

export default Mostrar;