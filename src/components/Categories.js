import React, { Component, useState, useEffect } from "react";

function Categories(props){
    const [categories, setCategories] = useState([]);
    const [cantCategories, setCantCategories] = useState([]);

    useEffect(() => {   
		fetch("http://localhost:3000/products/categorias")
		.then(response => response.json())
		.then(data => {
            setCategories(data.data)
            setCantCategories(data.data.length)
		})
	},[])


    return ( 
        <div>						
            <div className="contenedorCantidades">
                <h5>Total de Categorias</h5>
                <span className="cantidadCategorias">{cantCategories}</span>
            </div>
            <div className="contenedorCantidades">
                <div>
                    <h5>Categorias de productos </h5>
                </div>
                <div>
                    
                    {
                        categories.map((category, i) => (
                            <div><span className="dato1">{category.descripcion}</span></div>
                        ))
                    }               
                    
                </div>
            </div>
        </div>
    )
}

export default Categories;