import { combineReducers } from 'redux';

import { IngredientReducer } from './IngredientReducer';
import { RecipeReducer } from './RecipeReducer';

const rootReducer = combineReducers({
  IngredientReducer,
  RecipeReducer
});

export default rootReducer;