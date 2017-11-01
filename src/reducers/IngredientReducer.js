export function IngredientReducer(state = {}, action) {
	switch (action.type) {
		case 'UPDATE_INGREDIENTS':
			state.ingredients = action.text
			return state;
		default:
			return state;
	}
}