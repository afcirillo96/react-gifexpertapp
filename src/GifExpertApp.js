//Functional Component
import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);
    
    return (
        <> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                 categories.map(category => (//funciona como ciclo for e imprime todos los strings de la lista
                      <GifGrid 
                        key={category} 
                        category={category} />
                 ))
                }
            </ol>
        </>
    );
}