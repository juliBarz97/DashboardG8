import React, { useState, useEffect } from "react";


function Users() {
    const [lastUser, setLastUser] = useState([]);
    const [cantUser, setCantUser] = useState([]);

    useEffect(() => {   
		fetch("http://localhost:3000/users/api")
		.then(response => response.json())
		.then(data => {
			setLastUser(data.data[data.data.length-1])
            setCantUser(data.data.length)
		})
	},[])
    



    return (
       
        <div>
            <div className="contenedorCantidades">
                <h5>Total de Usuarios </h5>
                <span className="cantidadUsuarios">{cantUser}</span>
            </div>
            <div className="contenedorCantidades">
                <div>
                    <h5>Ultimo Usuario creado</h5>
                </div>
                <div>
                    <div><span className="dato3"></span><span className="dato1">{lastUser.nombre}</span></div>
                    <div><span className="dato3"></span><span className="dato1">{lastUser.email}</span> </div>
                    <div><span className="dato3"></span><span className="dato1">{lastUser.domicilio}</span></div>
                    
                </div>
            </div>
        </div>

    )
}
export default Users;