import React, { useEffect, useState } from 'react'
import Front from './Front'
import Back from './Back'
import  axios  from 'axios'
import bg from '../assets/backGround/wallpaperflare.com_wallpaper.jpg'

const Pokedex = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonId, setPokemonId] = useState(1);
  useEffect(()=>{
    ;(async()=>{

      try {
		const response = await axios.get(
						`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
					);
					
		      setPokemon(response.data)
	  } catch (error) {
		setIsErr('Data Not Found')
	  }
    })()
  },[pokemonId])
  return (
		<div className='min-h-screen -z-20 bg-[#24282B] relative min-w-[100vw] flex justify-start pl-28 items-center'>
			<div className='flex gap-0'>
				<Front
					pokemon={pokemon}
					setPokemonId={setPokemonId}
				></Front>
				<Back
					pokemon={pokemon}
					setPokemonId={setPokemonId}
					setPokemon={setPokemon}
					pokemonId={pokemonId}
				></Back>
			</div>
			<img
				src={bg}
				alt=''
				className='absolute right-0 -z-10 min-h-screen w-auto'
			/>
		</div>
	);
}

export default Pokedex