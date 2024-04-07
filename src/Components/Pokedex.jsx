import React, { useEffect, useState } from 'react'
import Front from './Front'
import Back from './Back'
import  axios  from 'axios'


const Pokedex = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonId, setPokemonId] = useState(1);
  useEffect(()=>{
    ;(async()=>{
      const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
			);
      setPokemon(response.data)
    })()
  },[pokemonId])
  return (
		<div className='min-h-screen bg-black min-w-[100vw] flex justify-center items-center'>
			<Front
				pokemon={pokemon}
				setPokemonId={setPokemonId}
			></Front>
			<Back
				pokemon={pokemon}
				setPokemonId={setPokemonId}
			></Back>
		</div>
	);
}

export default Pokedex