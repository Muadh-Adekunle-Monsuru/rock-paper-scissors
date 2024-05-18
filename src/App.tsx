import Header from './Components/Header';
import RegularGame from './Components/RegularGame';
import BonusGame from './Components/BonusGame';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { changeGame, changeModal, userPick } from '../store/dataslice';
import Modal from './Components/Modal';
import Picked from './Components/Picked';
import { AnimatePresence, motion } from 'framer-motion';
function App() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.data);

	//changing game mode from regular to bonus mode
	const changeGameMode = () => {
		dispatch(userPick(''));
		dispatch(changeGame());
	};
	return (
		<main className='h-screen overflow-hidden w-full bg-bodyBackground flex flex-col items-center p-6 relative '>
			<AnimatePresence>
				{store.modalOpen ? (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						key={'modal'}
						exit={{ scale: 0 }}
					>
						<Modal />
					</motion.div>
				) : (
					''
				)}
			</AnimatePresence>
			<Header />
			<AnimatePresence>
				{store.userselection ? (
					<Picked />
				) : store.bonus ? (
					<BonusGame />
				) : (
					<RegularGame />
				)}
			</AnimatePresence>
			<button
				className='border border-white px-6 text-lg p-1 uppercase font-mono text-white rounded-md absolute bottom-5 lg:bottom-3 right-3'
				onClick={() => dispatch(changeModal())}
			>
				Rules
			</button>
			<button
				className='border border-white px-6 text-lg p-1 uppercase font-mono text-white rounded-md absolute bottom-5 left-3'
				onClick={() => changeGameMode()}
			>
				{store.bonus ? 'Regular ' : 'Bonus '}
				Game
			</button>
		</main>
	);
}

export default App;
