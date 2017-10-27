import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

export function NavReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'Results':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Results' }),
        state
      );
      break;
    case 'RecipeDetail':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'RecipeDetail' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
  }

  return nextState || state;
}