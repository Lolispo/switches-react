import { combineReducers } from 'redux';

import counterReducer from './Counter/counter.reducer';
import switchboardReducer from '../components/SwitchBoard/switchboard.reducer'

const rootReducer = combineReducers({
	counter: counterReducer,
	switchboard: switchboardReducer,
});

export default rootReducer;
