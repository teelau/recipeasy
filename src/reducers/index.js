import { combineReducers } from 'redux';

import { NavReducer } from './NavReducer';
import { IngredientReducer } from './IngredientReducer';

const rootReducer = combineReducers({
  NavReducer,
  IngredientReducer
});

export default rootReducer;