import BonusRules from './BonusRules';
import IconClose from './IconClose';
import NormalRules from './NormalRules';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changeModal } from '../../store/dataslice';
export default function Modal() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.data);
	return (
		<div className='h-screen w-screen bg-gray-900/40 flex items-center justify-center relative px-5'>
			<div className='bg-white  rounded-lg p-6 flex flex-col items-center justify-center space-y-4'>
				<div className='w-full flex items-center justify-between shadow-2xl'>
					<h1 className='font-bold uppercase font-barlow-bold text-2xl'>
						Rules
					</h1>
					<div
						className='w-5 cursor-pointer'
						onClick={() => dispatch(changeModal())}
					>
						<IconClose />
					</div>
				</div>
				<div>{store.bonus ? <BonusRules /> : <NormalRules />}</div>
				<div>
					<p className='text-center'>Win: +3</p>
					<p className='text-center'>Lose: -1</p>
					Bonus Explanation:{' '}
					<a
						href='https://www.youtube.com/watch?v=iSHPVCBsnLw'
						target='_blank'
						className='font-bold text-blue-600 text-xs'
					>
						Big Bang Theory
					</a>
				</div>
			</div>
		</div>
	);
}
