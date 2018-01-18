import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { NavigationActions } from "react-navigation";

import HomeContainer from './src/containers/HomeContainer';
import ResultsContainer from './src/containers/ResultsContainer';
import RecipeDetailContainer from './src/containers/RecipeDetailContainer';
import FavRecipesContainer from './src/containers/FavRecipesContainer';
import Home from './src/views/Home';
import Login from './src/views/Login';

import rootReducer from './src/reducers';

import AppStyles from './Style';

const navigationConfig = {
	navigationOptions: {
		headerTintColor: AppStyles.color.primaryColor,
		headerStyle: AppStyles.headerStyle,
		headerTitleStyle: AppStyles.headerTitleStyle,
		headerBackTitle: null,
	},
}

const AppNavigator = StackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			title: 'Recipeasy',
		}
	},
  Home: {
		screen: HomeContainer,
		navigationOptions: {
			title: 'Recipeasy',
		}
	},
  Results: {
		screen: ResultsContainer,
		navigationOptions: {
			title: 'Results',
		}
  },
  RecipeDetail: {
		screen: RecipeDetailContainer,
		navigationOptions: ({navigation}) => ({
			title: '',
		}),
	},
  Favs: { 
    screen: FavRecipesContainer,
    navigationOptions: {
      title: 'Favourite Recipes'
    }
  },
}, navigationConfig);

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
