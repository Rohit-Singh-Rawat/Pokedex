import React from 'react'
import './Back.css'
const Back = () => {
  return (
		<div className='w-[350px] back rounded-br-2xl gap-5 flex justify-center items-center shadow-2xl  shadow-black  h-[570px] bg-gradient-to-br  from-40% from-[#a60729]  to-[#DC0433] '>
			<div className='w-[320px] back rounded-b-2xl gap-5 flex justify-center items-center shadow-2xl  shadow-black  h-[524px] bg-[#1c1c1c] '>
				<div className='w-[316px] back rounded-b-2xl p-8 gap-5 flex flex-col justify-end items-center shadow-2xl  shadow-black  h-[520px]    bg-gradient-to-br  from-40% from-[#a60729]  to-[#DC0433] '>
					<div className='w-full h-[90px] screen relative rounded-md '></div>
					<div className='w-full h-auto'>
						<div className='grid grid-rows-2  grid-cols-5 gap-[0.7px] w-full h-[70px]'>
							{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
								<button className='btn  rounded-sm  min-w-[95%] x h-full cursor-pointer bg-[#021c2f]'>
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
							<button className='wrap-btn w-8 h-8 rounded-l-lg  bg-[#301f1f]'>
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

							<button className='wrap-btn w-8 h-8 rounded-r-lg bg-[#301f1f]  '>
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

						<button className=' ml-10 mb-5 btn rounded-full w-8 h-8 cursor-pointer bg-[#5d0303]'>
							<div className='font-bold circle text-white shadow-2xl inner w-8 h-8  flex items-center justify-center   -translate-x-[1.5px] -translate-y-[1.5px] rounded-full    border-l-[1px] border-t-[1px] border-white  '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									enable-background='new 0 0 24 24'
									viewBox='0 0 24 24'
									id='Lock'
									className='w-6 h-6'
								>
									<path
										d='M17,9V7c0-2.8-2.2-5-5-5S7,4.2,7,7v2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M9,7
	c0-1.7,1.3-3,3-3s3,1.3,3,3v2H9V7z M13,17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1V17z'
										fill='#ffffff'
										class='color000000 svgShape'
									></path>
								</svg>
							</div>
						</button>
					</div>
					<div className='h-[10%] flex gap-8 px-3 w-full'>
						<div className='w-full h-full rounded-lg screen relative'></div>
						<div className='w-full h-full rounded-lg screen relative'></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Back 