import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ingredientReducers from './IngredientReducer'

const rootReducer = combineReducers({
	ingredientReducers,
	routing: routerReducer
})

export default rootReducer