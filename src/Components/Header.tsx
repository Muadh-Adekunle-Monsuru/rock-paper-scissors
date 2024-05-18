import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { AnimatePresence, motion } from 'framer-motion';
import { userPick } from '../../store/dataslice';
export default function Header() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.data.score);

	const handleReset = () => {
		dispatch(userPick(''));
	};
	return (
		<div className=' border-2 border-headerOutline p-1 px:10 rounded-lg lg:w-1/2 w-full flex justify-between items-center'>
			<div
				className='uppercase text-white lg:text-2xl text-xl font-barlow-bold p-2 select-none cursor-pointer'
				onClick={() => handleReset()}
			>
				<h1>Rock</h1>
				<h1>Paper</h1>
				<h1>Scissors</h1>
			</div>
			<div className='h-[90%] py-5 bg-white rounded-lg lg:px-14 px-5 flex flex-col items-center justify-center shadow-lg mx-2'>
				<h1 className='text-scoreText font-mono'>SCORE</h1>
				<AnimatePresence>
					<motion.p
						key={store}
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.9, type: 'spring' }}
						className='text-5xl font-barlow-bold text-headerOutline '
					>
						{store}
					</motion.p>
				</AnimatePresence>
			</div>
		</div>
	);
}
