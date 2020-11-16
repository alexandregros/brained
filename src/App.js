import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';

import Menu from './Menu/Menu';
import Game from './Game/Game';

import './App.scss';

const DEFAULT_STATE = {
	isStarted: false,
	theme    : {
		dark: true,
		icon: 'wb_sunny'
	}
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

	handleTheme = () => {
		const isDark = this.state.theme.dark;

		this.setState({theme: {
			dark: !isDark,
			icon: !isDark ? 'wb_sunny' : 'brightness_3'
		}})
	}

	render() {
		const {theme} = this.state

		return (
			<div className={`Brained ${!theme.dark ? 'light' : ''}`}>
				<Icon className="icon refresh" onClick={this.handleReset}>refresh</Icon>
				<Icon className="icon theme" onClick={this.handleTheme}>{theme.icon}</Icon>
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
