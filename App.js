import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import AppWithNavigationState from './navigators/AppNavigator'
import { createStore } from 'redux'
import { rootReducer } from './reducers'

class App extends React.Component {
	store = createStore(rootReducer)
	render() {
		return (
			<Provider store = {this.store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

export default App;
