export const getGifs= async(category) =>{      

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
    return gifs;
    
}