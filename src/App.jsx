import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import './App.css'
import Pokedex from "./components/Pokedex";
import { useState, useEffect } from "react";
import { getPokemonData, getPokemons } from "./functions/Api";
import { FavoriteProvider } from "./context/FavoriteContext";






function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(["raichu"]);


  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 24));
    } catch (error) {

    }
  }


  useEffect(() => {
    fetchPokemons();

  }, [page])

  const updateFavoritePokemon = (name) => {

    console.log(name);

  }

  return (

    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemon: updateFavoritePokemon
    }}>
      <Navbar />
      <Searchbar />
      {loading ? <div className="loading">
        <div>
          <img className="loading-img"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs" alt="" />

        </div>
        <div>

          <h1>Loading pokemon....</h1>
        </div>
      </div> :
        <Pokedex pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total} />
      }

    </FavoriteProvider>

  );
}

export default App;
