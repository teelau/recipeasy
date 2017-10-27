export default (state = [], action) => {
	switch(action.type) {
		case 'UPDATE_INGREDIENTS':
			return [
				...state,
				{ text: action.text }
			]
		default:
			return state
	}
}