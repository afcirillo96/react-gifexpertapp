import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {


    const [inputValue, setinputValue] = useState('')

    const handleInputChange=(evento) =>{ //escribe el nuevo valor
        setinputValue(evento.target.value);//setea con lo nuevo que se escribe
    }

    const handleSubmit = (evento) =>{
        evento.preventDefault(); //evita el refresh de la pagina

        if(inputValue.trim().length > 2) { //con trim() no se permite que se guarden los espacios em blanco
            setCategories(cats => [inputValue,...cats,]); //comunica con GifExpertApp
            setinputValue('');  //resetea el espacio en blanco para volver a escribir
        }
    }
    
    
    return (
        <form onSubmit={handleSubmit}> 
            <input                      //CAJA DONDE SE ESCRIBE
                type="text"     //tipo: texto
                value={inputValue}  //muestra el valor pro defecto, en este caso 'escribe algo..'
                onChange={handleInputChange}    //muestra el nuevo valor
            />
        </form>
    )
}

AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired
}