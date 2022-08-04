import React from 'react'
import Cardpokemon from './Cardpokemon';
import Pagination from './Pagination';


export default function Pokedex(props) {

  const {pokemons, page, setPage, total} = props;


  const lastPage = () =>{
    const lastPage = Math.max(page-1,0);
    console.log(lastPage);
    setPage(lastPage)

  };

  const nextPage = () =>{
    const nextPage = Math.min(page+1, total)
    console.log(nextPage);
    setPage(nextPage)
  }

  return (
    <>
    
      <div className='header-pokedex'>
        <div><h1>Pokedex</h1></div>
        <Pagination 
          page={ page + 1 }
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      <div className='pokedex-grid'>
       {
       pokemons.map((pokemon) => {
       
        return(
          <Cardpokemon pokemon={pokemon} key={pokemon.name}/>
        )
       })}
      </div>
    
    </>
  )
}
