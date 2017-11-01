import { connect } from 'react-redux';
import Results from '../views/Results';

const mapStateToProps = state => {
	return {
		ingredients : state.ingredients
	}
	console.log("here");
	console.log(state);
}

const ResultsContainer = connect(mapStateToProps)(Results)

export default ResultsContainer