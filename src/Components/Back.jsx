import React, { useEffect, useRef, useState } from 'react';
import './Back.css';
import axios from 'axios';

const Back = ({
	pokemon,
	pokemonId,
	setPokemonId,
	setPokemon,
	loading,
	lock,
}) => {
	const [isErr, setIsErr] = useState('');
	const screenRef = useRef('');
	const [description, setDescription] = useState('');
	const [audio, setAudio] = useState(null);
	useEffect(() => {
		(async () => {
			const container = screenRef.current;
			if (container) container.scrollTop = 0;
			try {
				const response = await axios.get(
					`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
				);

				const desc_list = response.data.flavor_text_entries.filter(
					(description) => {
						return description.language.name === 'en';
					}
				);
				setDescription(
					desc_list[
						Math.floor(Math.random() * desc_list.length)
					].flavor_text.replace(/(?:\r\n|\r|\n)/g, ' ')
				);
			} catch (error) {
				setIsErr('Data Not Found');
				setTimeout(() => {
					setIsErr('');
				}, 1000);
			}
		})();
	}, [pokemonId]);
	useEffect(() => {
		let aud = new Audio(pokemon?.cries?.latest);
		setAudio(aud);
	}, [pokemon]);
	const colours = {
		normal: '#A8A77A',
		fire: '#EE8130',
		water: '#6390F0',
		electric: '#F7D02C',
		grass: '#7AC74C',
		ice: '#96D9D6',
		fighting: '#C22E28',
		poison: '#A33EA1',
		ground: '#E2BF65',
		flying: '#A98FF3',
		psychic: '#F95587',
		bug: '#A6B91A',
		rock: '#B6A136',
		ghost: '#735797',
		dragon: '#6F35FC',
		dark: '#705746',
		steel: '#B7B7CE',
		fairy: '#D685AD',
	};
	const [newId, setNewId] = useState('');
	const timerRef = useRef(null);
	const [entering, setEntering] = useState(false);

	const handleNum = async (e) => {
		setEntering(true);
		clearTimeout(timerRef.current);
		let Idz;
		setNewId((id) => {
			Idz = id + e.target.innerHTML;
			return Idz;
		});
		timerRef.current = setTimeout(() => {
			setPokemonId(Idz);
			setNewId('');
			setEntering(false);
		}, 2000);
	};
	return (
		<div className='w-[350px] back rounded-br-2xl  gap-5 flex justify-center items-center shadow-2xl  shadow-black  h-[570px] bg-gradient-to-br  from-40% from-[#a60729]  to-[#DC0433] '>
			<div className='w-[320px] back rounded-b-2xl gap-5 flex justify-center items-center shadow-2xl  shadow-black  h-[524px] bg-[#1c1c1c] '>
				<div className='w-[316px] back rounded-b-2xl p-8 gap-5 flex flex-col justify-end items-center shadow-2xl  shadow-black  h-[520px]    bg-gradient-to-br  from-40% from-[#a60729]  to-[#DC0433] '>
					<div className='w-full p-4 font-[pokeFont] text-white h-[90px] screen relative rounded-md '>
						{lock ? null : loading ? (
							<div className='text-lg font-black flex justify-center items-center h-full '>
								Loading
							</div>
						) : isErr.length ? (
							isErr
						) : entering ? (
							<div className='text-xs'>Search for Pokemon: {newId}</div>
						) : (
							<div
								ref={screenRef}
								className='text-xs descScreen overflow-auto  leading-[19px] z-100  h-full  w-[100%]'
							>
								{' '}
								{description}{' '}
							</div>
						)}
					</div>
					<div className='w-full h-auto'>
						<div className='grid grid-rows-2  grid-cols-5 gap-[0.7px] w-full h-[70px]'>
							{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
								<button
									key={num}
									className='btn  rounded-sm  min-w-[95%] x h-full cursor-pointer bg-[#021c2f]'
									value={num}
									onClick={(e) => {
										lock ? null : handleNum(e);
									}}
								>
									<div className='text-white inner w-full border-l-[1px] border-black h-full font-semibold flex justify-center items-center  -translate-x-[1.5px] -translate-y-[1.5px] rounded-sm px-3  bg-blue-500 '>
										{num}
									</div>
								</button>
							))}
						</div>
					</div>

					<div className='flex justify-between items-center w-full pl-6'>
						<div>
							<div className='flex w-full items-center gap-1 justify-center'>
								<div className='w-5 h-5  rounded-full bg-black'></div>
								<div className='w-5 h-5 rounded-full bg-black'></div>
							</div>
						</div>
						<div className='w-full flex justify-end gap-2 h-[20px]'>
							<button className='btn  rounded-xl min-w-[70px]  max-w-[70px] w x h-full cursor-pointer bg-[#0d0101]'>
								<div className='text-white text-xs  inner w-full border-t-[1px]  border-t-[white] border-l-[1px] h-full font-semibold flex justify-center items-center  -translate-x-[1.5px] -translate-y-[1.5px]  rounded-xl px-3  bg-red-700 '>
									DATA
								</div>
							</button>
							<button className='btn  rounded-xl min-w-[70px] max-w-[76px] x h-full cursor-pointer bg-[#140101]'>
								<div className='text-white inner  text-xs w-full border-t-[1px]  border-t-[white] border-l-[1px]  h-full font-semibold flex justify-center items-center  -translate-x-[1.5px] -translate-y-[1.5px] rounded-xl px-3  bg-red-700 '>
									SETTINGS
								</div>
							</button>
						</div>
					</div>
					<div className='flex justify-between items-end px-6 py-1 w-full'>
						<div className='flex'>
							<button
								className='wrap-btn w-8 h-8 rounded-l-lg  bg-[#301f1f]'
								onClick={() => {
									const container = screenRef.current;
									if (!container) return;
									container.scrollTop -= 20;
								}}
							>
								<div className='w-8 h-8  buttons rounded-none rounded-l-lg border-l-[#aba0a0]  border-t-[#aba0a0] border-t-[0.2px] border-l-[0.5px] -translate-x-[1px] -translate-y-[1px] bg-black flex justify-center items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='512'
										height='512'
										viewBox='0 0 512 512'
										id='left-arrow'
										className='w-6 h-6 fill-current text-[#282525]	'
									>
										<path d='M64.5 256.5l192 192v-112h192v-160h-192v-112z'></path>
									</svg>
								</div>
							</button>

							<button
								className='wrap-btn w-8 h-8 rounded-r-lg bg-[#301f1f]  '
								onClick={() => {
									const container = screenRef.current;
									if (!container) return;
									container.scrollTop += 20;
								}}
							>
								<div className='w-8 h-8 buttons rounded-none rounded-r-lg border-r-[#aba0a0] border-t-[#aba0a0] border-t-[0.2px] border-l-[0.5px] -translate-x-[1px] -translate-y-[1px] bg-black flex justify-center items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='512'
										height='512'
										viewBox='0 0 512 512'
										id='left-arrow'
										className='w-6 h-6 rotate-180 fill-current text-[#282525]	'
									>
										<path d='M64.5 256.5l192 192v-112h192v-160h-192v-112z'></path>
									</svg>
								</div>
							</button>
						</div>

						<button
							className=' ml-10 mb-5 btn rounded-full w-8 h-8 cursor-pointer bg-[#5d0303]'
							onClick={() => {
								lock ? null : audio.play();
							}}
						>
							<div className='font-bold circle text-white shadow-2xl inner w-8 h-8  flex items-center justify-center   -translate-x-[1.5px] -translate-y-[1.5px] rounded-full    border-l-[1px] border-t-[1px] border-white  '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 32 32'
									id='Vynil'
								>
									<g
										data-name='Layer 12'
										fill='#ffffff'
										class='color000000 svgShape'
									>
										<circle
											cx='16'
											cy='16'
											r='10'
											fill='none'
											stroke='#ffffff'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											class='colorStroke000000 svgStroke'
										></circle>
										<circle
											cx='16'
											cy='16'
											r='3'
											fill='none'
											stroke='#ffffff'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											class='colorStroke000000 svgStroke'
										></circle>
									</g>
								</svg>
							</div>
						</button>
					</div>
					<div className='h-[10%] flex gap-8 px-3 w-full uppercase font-bold 	text-xl text-white'>
						<div
							style={{
								background: lock
									? null
									: loading
									? 'black'
									: pokemon?.types?.[0]?.type.name
									? colours[pokemon?.types?.[0]?.type.name]
									: '#777',
							}}
							className='w-full border-[1px] border-[#1d1c1c]  flex justify-center items-center h-full rounded-lg shad screen relative'
						>
							{lock ? null : loading ? null : pokemon?.types?.[0]?.type.name}
						</div>
						<div
							style={{
								background: lock
									? null
									: loading
									? 'black'
									: pokemon?.types?.[1]?.type.name
									? colours[pokemon?.types?.[1]?.type.name]
									: '#777',
							}}
							className='w-full border-[1px] border-[#1d1c1c]  flex justify-center items-center h-full rounded-lg shad screen relative'
						>
							{' '}
							{lock ? null : loading ? null : pokemon?.types?.[1]?.type.name}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Back;
