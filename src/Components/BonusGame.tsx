import PaperIcon from './PaperIcon';
import ScissorsIcon from './ScissorsIcon';
import RockIcon from './RockIcon';
import LizardIcon from './LizardIcon';
import SpockIcon from './SpockIcon';
import { useDispatch } from 'react-redux';
import { userPick } from '../../store/dataslice';
import { motion } from 'framer-motion';
export default function BonusGame() {
	const dispatch = useDispatch();
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			key={'bonus'}
			exit={{ scale: 0 }}
			className='w-72 lg:w-80 h-72 bg-pentagonBg bg-center bg-no-repeat bg-contain relative mt-20'
		>
			<div
				className=' absolute top-12 -right-10'
				onClick={() => dispatch(userPick('paper'))}
			>
				<PaperIcon />
			</div>
			<div
				className=' absolute -top-14 left-20 '
				onClick={() => dispatch(userPick('scissors'))}
			>
				<ScissorsIcon />
			</div>
			<div
				className=' absolute -bottom-14 right-4'
				onClick={() => dispatch(userPick('rock'))}
			>
				<RockIcon />
			</div>
			<div
				className=' absolute -bottom-14 -left-1'
				onClick={() => dispatch(userPick('lizard'))}
			>
				<LizardIcon />
			</div>
			<div
				className=' absolute top-12 -left-14'
				onClick={() => dispatch(userPick('spock'))}
			>
				<SpockIcon />
			</div>
		</motion.div>
	);
}
