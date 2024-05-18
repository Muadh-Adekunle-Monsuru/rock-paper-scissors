import PaperIcon from './PaperIcon';
import RockIcon from './RockIcon';
import ScissorsIcon from './ScissorsIcon';
import { useDispatch } from 'react-redux';
import { userPick } from '../../store/dataslice';
import { motion } from 'framer-motion';
export default function RegularGame() {
	const dispatch = useDispatch();
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			key={'regular'}
			exit={{ scale: 0 }}
			className='w-64 h-64 bg-triangleBg bg-center bg-no-repeat bg-contain relative mt-20'
		>
			<div
				className=' absolute -top-10 -left-10'
				onClick={() => dispatch(userPick('paper'))}
			>
				<PaperIcon />
			</div>
			<div
				className=' absolute -top-10 -right-10'
				onClick={() => dispatch(userPick('scissors'))}
			>
				<ScissorsIcon />
			</div>
			<div
				className='absolute -bottom-10 right-14'
				onClick={() => dispatch(userPick('rock'))}
			>
				<RockIcon />
			</div>
		</motion.div>
	);
}
