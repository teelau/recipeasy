import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { NavigationActions } from "react-navigation";

import Home from './src/views/Home';
import HomeContainer from './src/containers/HomeContainer';
import ResultsContainer from './src/containers/ResultsContainer';
import RecipeDetailContainer from './src/containers/RecipeDetailContainer';

import rootReducer from './src/reducers';
// import AppWithNavigationState from './src/navigators/AppNavigator'

const AppNavigator = StackNavigator({
  Home: { screen: HomeContainer },
  Results: { screen: ResultsContainer },
  RecipeDetail: { screen: RecipeDetailContainer }
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
