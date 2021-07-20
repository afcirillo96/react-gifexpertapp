import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className= "animate__animated animate__fadeIn">{ category }</h3>
            {/*loading ? 'Cargando...' : 'Data Cargada'*/}
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            
            {<div className="card-grid">
                {images.map( img =>  ( //funciona como ciclo for e imprime todos los strings de la lista
                    <GifGridItem   //5. UTILIZANDO EL NUEVO COMPONENTE GigGirdItem MOSTRAMOS LAS IMAGENES Y SUS TITULOS
                    key={img.id}
                    {...img}
                    />
                ))
                }
            </div>}
        </>
    )     
}

//2. USO MI FUNCION
    /*useEffect( ()=> {//Permite ejecutar cierto codigo de manera condicional
        getGifs(category).then(setimages)
    }, [category]) //2do argumento es arreglo de dependencias. Si no tiene dependencia, el ussEffect se dispara una sola vez
    */
    
    //1.CREO MI FUNCION
    /*const getGifs= async() =>{      

        const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=UYESX9QejwCQK7lrzvrYhtrNe8v6Mxdi`
        const respuesta = await fetch(url);//busca con FETCH lo que contenga el url que se le pasa en formato json
        const {data} = await respuesta.json(); //guarda los gifs en una constante desestructurada data. 
                                                //data esta dentro de data, por eso la desestructuracion
        const gifs = data.map( img => { //ciclo que retorna un nuevo objeto con los datos de los gifs
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })

        console.log(gifs);
        //3. GUARDA LOS OBJETOS EN LA LISTA DE useEstate
        setimages(gifs); 
    }*/