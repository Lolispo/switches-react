import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import {
	increaseCounter,
	decreaseCounter,
} from './redux/Counter/counter.actions';
import SwitchBoard from './components/SwitchBoard/SwitchBoard';
import { toggleIndex } from './components/SwitchBoard/switchboard.actions';

function App(props) {
	return (
		<div className='App'>
			<div>
				<div>Count: {props.count}</div>
				<button onClick={() => props.increaseCounter()}>Increase Count</button>
				<button onClick={() => props.decreaseCounter()}>Decrease Count</button>
			</div>
			<div>
				<h2>Switches</h2>
				<SwitchBoard props={props} amount='5'/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	console.log('state:', state);
	return {
		count: state.counter.count,
		listOfSwitches: state.switchboard.listOfSwitches,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increaseCounter: () => dispatch(increaseCounter()),
		decreaseCounter: () => dispatch(decreaseCounter()),
		toggleIndex: (el) => dispatch(toggleIndex(el))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
