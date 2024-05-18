import Header from './Components/Header';
import RegularGame from './Components/RegularGame';
import BonusGame from './Components/BonusGame';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { changeGame, changeModal } from '../store/dataslice';
import Modal from './Components/Modal';
import Picked from './Components/Picked';
function App() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.data);

	//changing game mode from regular to bonus mode
	const changeGameMode = () => {
		dispatch(changeGame());
	};
	return (
		<main className='h-screen overflow-hidden w-full bg-bodyBackground flex flex-col items-center p-6 relative '>
			<Header />

			{store.modalOpen ? <Modal /> : ''}
			{store.userselection ? (
				<Picked />
			) : store.bonus ? (
				<BonusGame />
			) : (
				<RegularGame />
			)}
			<button
				className='border border-white px-6 text-lg p-1 uppercase font-mono text-white rounded-md absolute bottom-3 right-3'
				onClick={() => dispatch(changeModal())}
			>
				Rules
			</button>
			<button
				className='border border-white px-6 text-lg p-1 uppercase font-mono text-white rounded-md absolute bottom-3 left-3'
				onClick={() => changeGameMode()}
			>
				{store.bonus ? 'Regular ' : 'Bonus '}
				Game
			</button>
		</main>
	);
}

export default App;
