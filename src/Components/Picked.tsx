import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import LizardIcon from './LizardIcon';
import PaperIcon from './PaperIcon';
import RockIcon from './RockIcon';
import ScissorsIcon from './ScissorsIcon';
import SpockIcon from './SpockIcon';
import { housePick } from '../../store/dataslice';
export default function Picked() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.data);
	const getIcon = () => {
		switch (store.userselection) {
			case 'lizard':
				return <LizardIcon />;
			case 'paper':
				return <PaperIcon />;
			case 'rock':
				return <RockIcon />;
			case 'scissors':
				return <ScissorsIcon />;
			case 'spock':
				return <SpockIcon />;
			default:
				<div className='bg-blue-900 w-40 h-40 rounded-full'></div>;
		}
	};
	const getComputerSelection = () => {
		console.log('house picking');
		const max = store.bonus ? 5 : 3;
		const getRandomNumber = () => Math.floor(Math.random() * max) + 1;
		switch (getRandomNumber()) {
			case 1:
				dispatch(housePick('scissors'));
				return <ScissorsIcon />;
			case 2:
				dispatch(housePick('paper'));
				return <PaperIcon />;
			case 3:
				dispatch(housePick('rock'));
				return <RockIcon />;
			case 4:
				dispatch(housePick('lizard'));
				return <LizardIcon />;
			case 5:
				dispatch(housePick('spock'));
				return <SpockIcon />;
			default:
				<div className='bg-blue-900 w-40 h-40 rounded-full'></div>;
		}
	};
	return (
		<div className='w-full lg:w-1/2 flex font-barlow-bold items-start justify-between uppercase text-white text-lg mt-10 lg:px-10 px-3'>
			<div className='flex flex-col justify-center space-y-10 items-center'>
				<h1>You Picked</h1>
				<div>{getIcon()}</div>
			</div>
			<div className='flex flex-col justify-center space-y-10 items-center'>
				<h1>The House Picked</h1>
				{getComputerSelection()}
				{/* <div className='bg-gray-800/70 w-20 h-20 p-14 rounded-full'/> */}
			</div>
		</div>
	);
}
