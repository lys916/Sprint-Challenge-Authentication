
import { SIGN_UP, LOGGED_IN, LOGGED_OUT } from '../actions/index';

const token = localStorage.getItem('token');
const userName = localStorage.getItem('userName');
// initial user state
const userInit = {
	logged_in: token ? true : false,
	userName: userName ? userName : ''
}

export const user = (state = userInit, action) => {
	switch (action.type) {
		case LOGGED_IN:
		const userName = action.payload;
		return { ...state, logged_in: true, userName}

		case LOGGED_OUT:
		return { ...state, logged_in: false, name: null}

		default:
		return state;
	}
};