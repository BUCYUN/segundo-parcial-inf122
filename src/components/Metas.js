import React, { useState } from "react";
import '../styles/Metas.css';
import Mostrar from "./Mostrar";


function Metas(){
    const[metas, setMetas] = useState ([])
    const[nuevaMeta, setNuevaMeta] = useState ('')
    const[contC, setContC] = useState (0)
    const[contP, setContP] = useState (0)
    const addMeta = () => {
        if(nuevaMeta.trim()==='') return;
        setMetas([...metas, {id: Date.now, tempMeta:nuevaMeta}]);
        setNuevaMeta('');
        setContP(contP+1)

    }

    const deleteMeta = (id) => {
        setMetas((tempMeta) => tempMeta.filter((meta) => meta.id !== id));
    };

    return(
        <div className="contenedor">
            <div className="contenedor-title">
                <h1 className="title">
                    Mis metas
                </h1>
            </div>
            
            <div className="contenedor-metas">
                <input type="text"
                name="metas"
                value={nuevaMeta}
                onChange={(e) => setNuevaMeta(e.target.value)}
                />

                <button className='boton' onClick={addMeta}>Agregar</button>
                    
            </div>
            <div className="contador">
                <p className="completado">Completadas: {contC}</p>
                <p className="pendiente">Pendientes: {contP}</p>
            </div>

            {metas.map((meta) => (
                    <Mostrar
                        key={meta.id}
                        meta={meta}
                        deleteM={deleteMeta}
                />
            ))} 


            
            
        </div>
    );
}

export default Metas;