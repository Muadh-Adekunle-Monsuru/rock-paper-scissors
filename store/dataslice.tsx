import { createSlice } from '@reduxjs/toolkit';
interface gamestate {
	score: number;
	userselection: string;
	bonus: boolean;
	modalOpen: boolean;
	housepick: string;
	win: string;
}

const initialState: gamestate = {
	score: 0,
	userselection: '',
	bonus: false,
	modalOpen: false,
	housepick: '',
	win: '',
};
const dataSlice = createSlice({
	name: 'dataslice',
	initialState,
	reducers: {
		addScore: (state) => {
			state.score += 2;
		},
		deductScore: (state) => {
			state.score -= 1;
		},
		userPick: (state, action) => {
			state.userselection = action.payload;
		},
		housePick: (state, action) => {
			state.housepick = action.payload;
		},
		changeGame: (state) => {
			state.bonus = !state.bonus;
		},
		changeModal: (state) => {
			state.modalOpen = !state.modalOpen;
		},
		setResult: (state, action) => {
			state.win = action.payload;
		},
	},
});

export const {
	addScore,
	deductScore,
	userPick,
	changeGame,
	changeModal,
	housePick,
	setResult,
} = dataSlice.actions;

export default dataSlice.reducer;
