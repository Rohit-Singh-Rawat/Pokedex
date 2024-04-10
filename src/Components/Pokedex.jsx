import React, { useEffect, useState } from 'react';
import Front from './Front';
import Back from './Back';
import axios from 'axios';
import bg from '../assets/backGround/wallpaperflare.com_wallpaper.jpg';

const Pokedex = () => {
	const [pokemon, setPokemon] = useState({});
	const [lock, setLock] = useState(true);
	const [pokemonId, setPokemonId] = useState(1);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
				);

				setPokemon(response.data);
			} catch (error) {
				setIsErr('Data Not Found');
			} finally {
				setLoading(false);
			}
		})();
	}, [pokemonId]);
	return (
		<content className='min-h-screen max-w-[100vw] max-h-screen  relative min-w-[100vw] flex justify-center items-center'>
			<div className='flex gap-0'>
				<Front
					pokemon={pokemon}
					loading={loading}
					setPokemonId={setPokemonId}
					lock={lock}
					setLock={setLock}
				></Front>
				<Back
					lock={lock}
					pokemon={pokemon}
					setPokemonId={setPokemonId}
					setPokemon={setPokemon}
					loading={loading}
					pokemonId={pokemonId}
				></Back>
			</div>
			<img
				src={bg}
				alt=''
				className='absolute max-h-screen min-h-screen -z-10 max-w-[100dvw] min-w-[100dvw]'
			/>
		</content>
	);
};

export default Pokedex;
