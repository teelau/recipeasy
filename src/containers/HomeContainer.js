import { connect } from 'react-redux';
import Home from '../views/Home';
import { updateIngredients } from '../actions/IngredientActions'

const mapStateToProps = state => {
	return {
		ingredients : state.ingredients
	}

}

const mapDispatchToProps = dispatch => {
	return {
		onSubmitIngredients: ingredientList => {
			dispatch(updateIngredients(ingredientList));
		}
	}
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer