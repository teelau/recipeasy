import { connect } from 'react-redux';
import Results from '../views/Results';

import { updateRecipes } from '../actions/RecipeActions'; 

const mapStateToProps = state => {
	return {
		ingredients: state.IngredientReducer.ingredients
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onClickRecipe: recipeObject => {
			dispatch(updateRecipes(recipeObject));
		}
	};
};

const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results);
export default ResultsContainer;