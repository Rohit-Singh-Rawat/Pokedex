import React from 'react';
import './Front.css';

const Front = () => {
	return (
		<div className='w-[350px] rounded-bl-xl gap-10 flex flex-col items-end      h-[500px] bg-[#DC0433]'>
			<div className='top2 h-[114px]  rounded-tl-xl flex justify-between items-top bg-[#840413]'>
				<div className='top w-[360px]  rounded-tl-xl h-[100px] bg-[#DC0433]'></div>
			</div>
			<div className='w-full '>
				<div className='window-wrap'>
					<div className='w-[76%] flex flex-col justify-center gap-3  items-center rounded-lg window m-auto h-[200px] bg-white'>
						<div className='flex w-full items-center gap-7 justify-center'>
							<div className='w-3 h-3 rounded-full bg-red-900'></div>
							<div className='w-3 h-3 rounded-full bg-red-900'></div>
						</div>
						<div className='w-[68%] h-[60%] rounded-md bg-black'></div>
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
		</div>
	);
};

export default Front;
