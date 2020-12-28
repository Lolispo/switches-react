import { DONE, TOGGLE } from "./switchboard.types";

export const done = () => {
	return {
		type: DONE,
	};
};

export const toggleIndex = (index) => {
	return {
        type: TOGGLE,
        index: index
	};
};
