import { type } from '@testing-library/user-event/dist/type';
import React, { useContext } from 'react'
import FavoriteContext from '../context/FavoriteContext';

export default function Cardpokemon(props) {
    const { pokemon } = props;
    const {favoritePokemons} = useContext(FavoriteContext);

    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
        <div className='card-pokemon'>

            <div >
                <img className='pokemon-img' src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className='card-body'>
                <div className='card-top'>
                    <h3>{pokemon.name}</h3>
                    <p>#{pokemon.id}</p>
                </div>
                <div className='card-footer'>
                    <div className='types-container'>{pokemon.types.map((types, index) => {
                        return (
                            <div className='types' key={index}>                                
                                {types.type.name}
                            </div>
                        )
                    })}</div>
                    <div className='favorite'>{heart}</div>
                </div>
            </div>
        </div>
    )
}
