import { StackNavigator } from 'react-navigation';

import Home from './views/Home';
import Results from './views/Results';
import RecipeDetail from './views/RecipeDetail';

const App = StackNavigator({
  Home: { screen: Home },
  Results: { screen: Results },
  RecipeDetail: { screen: RecipeDetail }
});

export default App;
