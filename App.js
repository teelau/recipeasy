import { StackNavigator } from 'react-navigation';

import Home from './views/Home';
import Results from './views/Results';

const App = StackNavigator({
  Home: { screen: Home },
  Results: { screen: Results }
});

export default App;
