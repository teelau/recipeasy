import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { NavigationActions } from "react-navigation";

import Home from './src/views/Home';
import HomeContainer from './src/containers/HomeContainer';
import Results from './src/views/Results';
import RecipeDetail from './src/views/RecipeDetail';

import rootReducer from './src/reducers';
// import AppWithNavigationState from './src/navigators/AppNavigator'

const AppNavigator = StackNavigator({
  Home: { screen: HomeContainer },
  Results: { screen: Results },
  RecipeDetail: { screen: RecipeDetail }
});

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

class App extends React.Component {
	store = createStore(rootReducer);
	render() {
		return (
			<Provider store={this.store}>
				<AppNavigator />
			</Provider>
		);
	}
}

export default App;
