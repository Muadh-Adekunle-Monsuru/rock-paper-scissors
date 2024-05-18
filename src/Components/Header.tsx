import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export default function Header() {
	const store = useSelector((state: RootState) => state.data.score);
	return (
		<div className=' border-2 border-headerOutline p-1 px:10 rounded-lg lg:w-1/2 w-full flex justify-between items-center'>
			<div className='uppercase text-white lg:text-2xl text-xl font-barlow-bold p-2'>
				<h1>Rock</h1>
				<h1>Paper</h1>
				<h1>Scissors</h1>
			</div>
			<div className='h-[90%] py-5 bg-white rounded-lg px-14 flex flex-col items-center justify-center shadow-lg mx-2'>
				<h1 className='text-scoreText font-mono'>SCORE</h1>
				<p className='text-5xl font-barlow-bold text-headerOutline '>{store}</p>
			</div>
		</div>
	);
}
