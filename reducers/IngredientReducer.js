export default (state = {}, action) => {
	switch(action.type) {
		case 'GET_INGREDIENTS':
			return R.merge(state, {
				text: action.payload
			});
		default:
			return state
	}
}