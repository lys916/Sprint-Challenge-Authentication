import { combineReducers } from 'redux';
import { user } from './userReducer';
import { jokes } from './jokeReducer';

export const rootReducer = combineReducers({
 	user,
 	jokes
})