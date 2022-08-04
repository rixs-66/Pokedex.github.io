import React, { useState } from 'react'
import { searchPokemon } from '../functions/Api';




export default function Searchbar() {

    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const onChange = (evt) => {
        setSearch(evt.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return (
        <div className='search-bar'>

            <input
                type="text"
                placeholder='Buscar pokemon...'
                onChange={onChange}
            />

            <button onClick={onClick}>Buscar</button>


        </div>
    )
}
