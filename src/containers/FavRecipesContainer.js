import { connect } from 'react-redux';
import FavRecipes from '../views/FavRecipes';

import { updateRecipes } from '../actions/RecipeActions';

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		onClickRecipe: recipeObject => {
			dispatch(updateRecipes(recipeObject));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FavRecipes);