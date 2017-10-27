import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import AppWithNavigationState from './navigators/AppNavigator'
import { createStore } from 'redux'
import ingredientReducer from './reducers'
// import { rootReducer } from './reducers'

class App extends React.Component {
	store = createStore(ingredientReducer)
	render() {
		return (
			<Provider store = {this.store}>
				<AppTest />
			</Provider>
		);
	}
}

class AppTest extends React.Component {
	render() {
		return (
			<View>
				<Text style={{margin: 25}}>hello world</Text>
			</View>
		)
	}
}

export default App;
