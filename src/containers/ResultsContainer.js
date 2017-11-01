import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as actions from '../actions';
import Results from '../views/Results';

const mapStateToProps = state => {
	return {
		ingredients : state.IngredientReducer.ingredients
	}
	
}

const ResultsContainer = connect(mapStateToProps)(Results)

export default ResultsContainer