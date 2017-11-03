import { combineReducers } from 'redux';

import { NavReducer } from './NavReducer';
import { IngredientReducer } from './IngredientReducer';
import { RecipeReducer } from './RecipeReducer';

const rootReducer = combineReducers({
  NavReducer,
  IngredientReducer,
  RecipeReducer
});

export default rootReducer;