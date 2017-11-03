export function RecipeReducer(state = {}, action) {
	switch (action.type) {
		case 'UPDATE_RECIPES':
			state.recipes = action.recipes;
			return state;
		default:
			return state;
	}
}