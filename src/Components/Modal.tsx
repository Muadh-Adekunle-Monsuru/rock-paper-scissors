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
		<div className='h-screen w-screen bg-gray-900/70 flex items-center justify-center absolute z-30 top-0 px-5'>
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
			</div>
		</div>
	);
}
