import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './src/reducers'
import AppWithNavigationState from './src/navigators/AppNavigator'

class App extends React.Component {
	store = createStore(rootReducer);

	render() {
		return (
			<Provider store = {this.store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

export default App;
