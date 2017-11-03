import { connect } from 'react-redux';
//import * as actions from '../actions';
import RecipeDetail from '../views/RecipeDetail';

const mapStateToProps = state => {
	return {
		recipes : state.RecipeReducer.recipes
	};
};

const RecipeDetailContainer = connect(mapStateToProps)(RecipeDetail);
export default RecipeDetailContainer;