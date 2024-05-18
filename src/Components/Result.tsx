import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
export default function Result() {
	const userpick = useSelector((state: RootState) => state.data.userselection);
	const housepick = useSelector((state: RootState) => state.data.housepick);

	useEffect(() => {
		if (
			(userpick == 'paper' && housepick == 'rock') ||
			(userpick == 'rock' && housepick == 'scissors') ||
			(userpick == 'scissors' && housepick == 'paper')
		) {
			console.log('YOU win');
		} else if (
			(userpick == 'paper' && housepick == 'scissors') ||
			(userpick == 'rock' && housepick == 'paper') ||
			(userpick == 'scissors' && housepick == 'rock')
		) {
			console.log('YOU lose');
		} else {
			console.log(userpick + housepick);
			console.log('Draw');
		}
	}, []);
	return <div></div>;
}
