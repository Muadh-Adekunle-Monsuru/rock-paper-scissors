import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import LizardIcon from './LizardIcon';
import PaperIcon from './PaperIcon';
import RockIcon from './RockIcon';
import ScissorsIcon from './ScissorsIcon';
import SpockIcon from './SpockIcon';
import {
	housePick,
	addScore,
	deductScore,
	userPick,
	setResult,
	drawScrore,
} from '../../store/dataslice';
import { motion, AnimatePresence } from 'framer-motion';

export default function Picked() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.data);
	const userpick = useSelector((state: RootState) => state.data.userselection);

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
	const pickComputerSelection = () => {
		const max = store.bonus ? 5 : 3;
		const getRandomNumber = () => Math.floor(Math.random() * max) + 1;
		let computerSelection;
		switch (getRandomNumber()) {
			case 1:
				computerSelection = 'scissors';
				break;
			case 2:
				computerSelection = 'paper';
				break;
			case 3:
				computerSelection = 'rock';
				break;
			case 4:
				computerSelection = 'lizard';
				break;
			case 5:
				computerSelection = 'spock';
				break;
			default:
				<div className='bg-blue-900 w-40 h-40 rounded-full'></div>;
		}
		dispatch(housePick(computerSelection));
		if (
			(userpick == 'paper' && computerSelection == 'rock') ||
			(userpick == 'paper' && computerSelection == 'spock') ||
			(userpick == 'rock' && computerSelection == 'scissors') ||
			(userpick == 'rock' && computerSelection == 'lizard') ||
			(userpick == 'scissors' && computerSelection == 'paper') ||
			(userpick == 'scissors' && computerSelection == 'lizard') ||
			(userpick == 'lizard' && computerSelection == 'spock') ||
			(userpick == 'lizard' && computerSelection == 'paper') ||
			(userpick == 'spock' && computerSelection == 'scissors') ||
			(userpick == 'spock' && computerSelection == 'rock')
		) {
			console.log('You Win');
			dispatch(setResult('win'));
			dispatch(addScore());
		} else if (
			(userpick == 'paper' && computerSelection == 'scissors') ||
			(userpick == 'paper' && computerSelection == 'lizard') ||
			(userpick == 'rock' && computerSelection == 'paper') ||
			(userpick == 'rock' && computerSelection == 'spock') ||
			(userpick == 'scissors' && computerSelection == 'rock') ||
			(userpick == 'scissors' && computerSelection == 'spock') ||
			(userpick == 'lizard' && computerSelection == 'rock') ||
			(userpick == 'lizard' && computerSelection == 'scissors') ||
			(userpick == 'spock' && computerSelection == 'lizard') ||
			(userpick == 'spock' && computerSelection == 'paper')
		) {
			console.log('YOU lose');
			dispatch(setResult('lose'));
			dispatch(deductScore());
		} else {
			dispatch(setResult('draw'));
			dispatch(drawScrore());
			console.log('Draw');
		}
	};
	useEffect(() => {
		pickComputerSelection();
	}, []);

	const getComputerIcon = () => {
		switch (store.housepick) {
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
				return <div className='bg-blue-900 w-40 h-40 rounded-full'></div>;
		}
	};

	const handleReplay = () => {
		dispatch(userPick(''));
	};
	return (
		<>
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				key={'picked'}
				exit={{ scale: 0 }}
				layout
				className='w-full lg:w-1/2 flex font-barlow-bold items-start justify-between uppercase text-white text-lg mt-10 md:px-14 px-3'
			>
				<div className='flex flex-col justify-center space-y-10 items-center'>
					<h1>You Picked</h1>
					<div>{getIcon()}</div>
				</div>
				<AnimatePresence>
					{store.housepick && (
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}
							className='hidden lg:flex flex-col items-center justify-center h-full gap-5'
						>
							{store.win == 'win' ? (
								<div className='lg:text-5xl text-xl  text-green-400'>
									You Win
								</div>
							) : store.win == 'lose' ? (
								<div className='lg:text-5xl text-xl text-red-600'>You Lose</div>
							) : (
								<div className='lg:text-5xl text-xl  text-gray-100'>
									You Draw
								</div>
							)}
							<button
								className='text-xs uppercase font-barlow-regular px-6 bg-white text-black rounded-lg p-2 shadow-lg hover:text-red-200 hover:scale-95 transition duration-300 ease-in-out'
								onClick={() => handleReplay()}
							>
								play again
							</button>
						</motion.div>
					)}
				</AnimatePresence>
				<div className='flex flex-col justify-center space-y-10 items-center'>
					<h1>The House Picked</h1>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.5, type: 'spring' }}
					>
						{getComputerIcon()}
					</motion.div>
				</div>
			</motion.div>
			<AnimatePresence>
				{store.housepick && (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}
						className='lg:hidden flex-col items-center justify-center h-full gap-5 p-10 font-barlow-bold'
					>
						{store.win == 'win' ? (
							<div className='text-6xl   text-green-400'>You Win</div>
						) : store.win == 'lose' ? (
							<div className='text-6xl text-red-400'>You Lose</div>
						) : (
							<div className='text-6xl   text-gray-100'>You Draw</div>
						)}
						<button
							className='text-lg uppercase font-barlow-regular px-6 bg-white text-black rounded-lg p-2 shadow-lg hover:text-red-200 hover:scale-95 transition duration-300 ease-in-out w-full mt-4'
							onClick={() => handleReplay()}
						>
							play again
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
