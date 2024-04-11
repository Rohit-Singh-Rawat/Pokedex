import React, { useEffect, useState } from 'react';
import './Front.css';

const Front = ({ pokemon, setPokemonId, loading, lock, setLock }) => {
	const [showFront, setShowFront] = useState(true);

	useEffect(() => {

		setShowFront(true);
	}, [pokemon]);
	return (
		<div className='w-[400px]  relative rounded-bl-xl gap-5 flex flex-col  shadow-2xl  shadow-black  h-[570px] bg-gradient-to-br  from-40% from-[#a60729]  to-[#DC0433] '>
			<div className='flex flex-col items-end '>
				<div className='top2 h-[114px]   w-[412px] rounded-tl-xl flex justify-start items-top bg-gradient-to-b from-50% from-[#74051f] from to-[#840413]'>
					<div className='top p-2  flex w-[412px]  rounded-tl-xl h-[100px] bg-[#DC0433]'>
						<div className='w-[75px] sha ml-5  flex justify-center items-center rounded-full h-[75px] bg-slate-300'>
							<div className='  flex justify-start items-start w-[78%]  h-[78%] shadow-2xl	light  rounded-full'></div>
						</div>

						<div className='flex mt-2 gap-2 ml-3'>
							<div className='w-5 sha h-5 rounded-full bg-red-500'></div>
							<div className='w-5  sha h-5 rounded-full bg-yellow-500'></div>
							<div className='w-5 sha h-5 rounded-full bg-green-500'></div>
						</div>
					</div>
				</div>
			</div>
			<div className='h-[87.2%] right-0 bottom-0 w-[45px] bg-gradient-to-r to-60% from-[#790a24] to-[#9b0718] absolute flex flex-col justify-between py-10'>
				<div className='w-full h-[8%] border-y-[3.3px] border-black'></div>
				<div className='w-full h-[8%] border-y-[3.3px] border-black'></div>
			</div>
			<div className='flex flex-col gap-5 pr-5'>
				<div className='w-full '>
					<div className='window-wrap '>
						<div className='w-[76%] flex flex-col justify-center gap-3  items-center rounded-lg window m-auto h-[200px] bg-white'>
							<div className='flex w-full items-center gap-7 justify-center'>
								<div className='w-3 h-3 rounded-full bg-red-900'></div>
								<div className='w-3 h-3 rounded-full bg-red-900'></div>
							</div>
							<div className='w-[68%] flex justify-center items-center h-[60%] rounded-md relative screen'>
								{lock ? null : loading ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 32 32'
										id='Loading'
										className='size-16 animate-spin '
									>
										<g
											data-name='Looding 19'
											fill='#000000'
											className='color000000 svgShape'
										>
											<path
												fill='#aafd87'
												d='M29.89 15.81a2.51 2.51 0 1 0-5 .45 9.65 9.65 0 0 1-1.68 6.34 10.24 10.24 0 0 1-5.74 4 10.71 10.71 0 0 1-7.38-.7 11.44 11.44 0 0 1-5.48-5.62A12.07 12.07 0 0 0 9.46 27 12.58 12.58 0 0 0 17.9 29a13.31 13.31 0 0 0 8.18-4 14 14 0 0 0 3.81-8.75v-.08A2.29 2.29 0 0 0 29.89 15.81zM7.11 15.74A9.65 9.65 0 0 1 8.79 9.4a10.24 10.24 0 0 1 5.74-4 10.71 10.71 0 0 1 7.38.7 11.44 11.44 0 0 1 5.48 5.62A12.07 12.07 0 0 0 22.54 5 12.58 12.58 0 0 0 14.1 3 13.31 13.31 0 0 0 5.92 7a14 14 0 0 0-3.81 8.75v.08a2.29 2.29 0 0 0 0 .37 2.51 2.51 0 1 0 5-.45z'
												className='color414042 svgShape'
											></path>
										</g>
									</svg>
								) : (
									<img
										src={
											showFront
												? pokemon.sprites?.other?.showdown.front_default ??
												  pokemon.sprites?.front_default
												: pokemon.sprites?.other?.showdown.back_default ??
												  pokemon.sprites?.back_default
										}
										alt=''
										className='object-contain text-white max-h-full'
										onError={(event) => (event.target.style.display = 'none')}
									/>
								)}
							</div>
							<div className='flex justify-between w-full px-10'>
								<div className='w-5 h-5 rounded-full bg-red-600'></div>
								<div className='flex flex-col gap-[4.5px]'>
									<div className='h-[2px] w-10 bg-black'></div>
									<div className='h-[2px] w-10 bg-black'></div>
									<div className='h-[2px] w-10 bg-black'></div>
									<div className='h-[2px] w-10 bg-black'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<div className='flex justify-center gap-5 items-start'>
						<button
							className='btn  rounded-sm  min-w-[75px]  cursor-pointer bg-[#5d0303]'
							onClick={() => {
								setLock(false);
								
								lock? setPokemonId(1): null;
							}}
						>
							<div className='text-white inner font-semibold border-l-[1px] border-t-[1px] border-white   -translate-x-[1.5px] -translate-y-[1.5px] rounded-sm px-3  bg-red-600 '>
								START
							</div>
						</button>

						<button
							className='btn min-w-[75px]   rounded-sm cursor-pointer bg-[#5d0303]'
							onClick={() => {
								setLock(true);
								setPokemonId(1);
							}}
						>
							<div className='text-white inner shadow-inner font-semibold  -translate-x-[1.5px] -translate-y-[1.5px] rounded-sm px-3   bg-red-600 border-l-[1px] border-t-[1px] border-white  '>
								STOP
							</div>
						</button>
					</div>
					<button className=' ml-10 btn rounded-full w-10 h-10 cursor-pointer bg-[#5d0303]' onClick={()=>{
						lock? null :setPokemonId(Math.floor(Math.random()*1025+1))
					}}>
						<div className='font-bold text-white inner w-10 h-10 flex items-center justify-center   -translate-x-[1.5px] -translate-y-[1.5px] rounded-full bg-gradient-to-br from-white to-25%  to-blue-900  border-l-[1px] border-t-[1px] border-white  '>
							A
						</div>
					</button>
					<div className='flex justify-around px-5 items-center'>
						<div className='screen relative w-[130px]  min-w-[130px] h-14'>
							<div className='text-white shad bg-red-600 border-2 border-black h-full w-full flex justify-center flex-col '>
								{lock ? null : loading ? (
									<span className='font-[pokeFont] h-full text-md flex justify-center items-center'>
										Loading
									</span>
								) : (
									<div className='flex font-[pokeFont] pl-2 py-[3px] justify-start items-center text-sm gap-3'>
										<div className='w-6 p h-6 flex  justify-center items-center bg-white rounded-full'>
											<svg
												height='64'
												viewBox='0 0 64 64'
												width='64'
												xmlns='http://www.w3.org/2000/svg'
												className='w-6 h-6'
											>
												<g
													fill='none'
													fillRule='evenodd'
												>
													<path
														d='m4 32c0-15.463973 12.536027-28 28-28s28 12.536027 28 28z'
														fill='#e43535'
													/>
													<path
														d='m4 60c0-15.463973 12.536027-28 28-28s28 12.536027 28 28z'
														fill='#ececec'
														transform='matrix(1 0 0 -1 0 92)'
													/>
													<g stroke='#595959'>
														<path
															d='m5 32h54'
															strokeLinecap='square'
															strokeWidth='2'
														/>
														<circle
															cx='32'
															cy='32'
															fill='#fff'
															r='8'
															strokeLinecap='round'
															strokeWidth='4'
														/>
													</g>
												</g>
											</svg>
										</div>
										{String(pokemon.id).padStart(3, '0')}
									</div>
								)}
								{lock ? null : loading ? null : (
									<div className='w-full font-[pokeFont]  flex items-end pl-2 uppercase text-[9.5px] font-bold  bg-white h-[50%] text-black'>
										{pokemon.name}
									</div>
								)}
							</div>
						</div>
						<div className='bg-gradient-to-br pl-[3px] pt-[3px]	 border-r-4 flex flex-col justify-center items-center to-80% to-red-700  border-b-2 border-red-700  from-[#4b0505] shadow-[10px_15px_10px_-15px_rgba(0,0,0,0.6)] rounded-full w-24 h-24'>
							<div className='flex'>
								<button
									className='wrap-btn w-6 h-6 bg-[#301f1f] rounded-sm '
									onClick={() =>
										setPokemonId((id) =>
											lock ? id : id == 1 ? id : parseInt(id) - 1
										)
									}
								>
									<div className='w-6 h-6 buttons -translate-x-[1px] -translate-y-[1px] bg-black flex justify-center items-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32'
											height='32'
											viewBox='0 0 32 32'
											id='dropup-arrow'
											className='text-white w-full h-full  fill-current'
										>
											<path d='M8.998 20h13.966c.286 0 .54-.138.72-.352l.004.004c.39-.434.39-1.138 0-1.572l-6.998-7.754a.926.926 0 0 0-1.41 0c-.01.012-.014.028-.024.04L8.272 18.08a1.202 1.202 0 0 0 0 1.572l.012.01a.945.945 0 0 0 .714.338z'></path>
										</svg>
									</div>
								</button>
							</div>
							<div className='flex'>
								<button
									className='wrap-btn w-6 h-6 bg-[#301f1f] rounded-sm '
									onClick={() =>
										setShowFront((view) => {
											return (lock ? view : !view);
										})
									}
								>
									<div className='w-6 h-6 buttons -translate-x-[1px] -translate-y-[1px] bg-black flex justify-center items-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32'
											height='32'
											viewBox='0 0 32 32'
											id='dropup-arrow'
											className='text-white w-full h-full -rotate-90 fill-current'
										>
											<path d='M8.998 20h13.966c.286 0 .54-.138.72-.352l.004.004c.39-.434.39-1.138 0-1.572l-6.998-7.754a.926.926 0 0 0-1.41 0c-.01.012-.014.028-.024.04L8.272 18.08a1.202 1.202 0 0 0 0 1.572l.012.01a.945.945 0 0 0 .714.338z'></path>
										</svg>
									</div>
								</button>
								<button className='wrap-btn w-6 h-6 bg-[#301f1f] rounded-sm '>
									<div className='w-6 h-6 buttons border-0 -translate-x-[1px] -translate-y-[1px] bg-black flex justify-center items-center'></div>
								</button>
								<button
									className='wrap-btn w-6 h-6 bg-[#301f1f] rounded-sm '
									onClick={() =>
										setShowFront((view) => {
											return lock ? view : !view;
										})
									}
								>
									<div className='w-6 h-6 buttons -translate-x-[1px] -translate-y-[1px] bg-black flex justify-center items-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32'
											height='32'
											viewBox='0 0 32 32'
											id='dropup-arrow'
											className='text-white w-full h-full rotate-90  fill-current'
										>
											<path d='M8.998 20h13.966c.286 0 .54-.138.72-.352l.004.004c.39-.434.39-1.138 0-1.572l-6.998-7.754a.926.926 0 0 0-1.41 0c-.01.012-.014.028-.024.04L8.272 18.08a1.202 1.202 0 0 0 0 1.572l.012.01a.945.945 0 0 0 .714.338z'></path>
										</svg>
									</div>
								</button>
							</div>
							<div className='flex'>
								<button
									className='wrap-btn w-6 h-6 bg-[#301f1f] rounded-sm '
									onClick={() =>
										setPokemonId((id) =>
											lock ? id : (id == 1025) ? id : parseInt(id) + 1
										)
									}
								>
									<div className='w-6 h-6 buttons -translate-x-[1px] -translate-y-[1px] bg-black flex justify-center items-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32'
											height='32'
											viewBox='0 0 32 32'
											id='dropup-arrow'
											className='text-white w-full h-full rotate-180 fill-current'
										>
											<path d='M8.998 20h13.966c.286 0 .54-.138.72-.352l.004.004c.39-.434.39-1.138 0-1.572l-6.998-7.754a.926.926 0 0 0-1.41 0c-.01.012-.014.028-.024.04L8.272 18.08a1.202 1.202 0 0 0 0 1.572l.012.01a.945.945 0 0 0 .714.338z'></path>
										</svg>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Front;
