import { DONE, TOGGLE } from "./switchboard.types";

const INITIAL_STATE = {
    amount: 5,
    listOfSwitches: [],
    done: false
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE:
            console.log('Toggle reducer', action)
			return {
                ...state,
			};
		case DONE:
			return {
                ...state,
                done: true
			};

		default:
			return state;
	}
};

export default reducer;
