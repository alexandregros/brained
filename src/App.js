import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';

import Menu from './Menu/Menu';
import Game from './Game/Game';

import './App.scss';

const DEFAULT_STATE = {
	isStarted: false
}

class App extends Component {
	constructor() {
		super()
		this.state = {...DEFAULT_STATE}
	}

	// arrow fx for binding
	handleStart = () => {
		this.setState({isStarted: true})
	}

	// arrow fx for binding
	handleReset = () => {
		this.setState(DEFAULT_STATE)
	}

	render() {
		return (
			<div className="Brained">
				<Icon className="icon refresh" onClick={this.handleReset}>refresh</Icon>
				{
					!this.state.isStarted
					? <Menu onStarted={this.handleStart} />
					: <Game />
				}
			</div>
		)
	}
}

export default App;
