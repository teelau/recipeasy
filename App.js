import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import AppWithNavigationState from './navigators/AppNavigator'
import { createStore } from 'redux'

class App extends React.Component {
	store = createStore()
	render() {
		return (
			<Provider store = {this.store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

export default App;
