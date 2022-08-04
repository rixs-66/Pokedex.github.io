import React from 'react'
import FavoriteContext from '../context/FavoriteContext'


const {useContext} = React;




export default function Navbar() {

  const {favoritePokemons} = useContext(FavoriteContext)

  console.log(favoritePokemons);

  return (
    <nav>
      <div />
      <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Logo app"
          className='nav-img' />
      </div>

      <div className='favorite'>💛 {favoritePokemons.length}</div>
    </nav>
  )
}


