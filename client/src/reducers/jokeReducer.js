
import { FETCHED_JOKES} from '../actions/index';

export const jokes = (state = [], action) => {
	switch (action.type) {

		case FETCHED_JOKES:
		return action.payload;

		default:
		return state;
	}
};