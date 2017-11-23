import { connect } from 'react-redux';
import FavRecipes from '../views/FavRecipes';

const mapStateToProps = state => {
	return {
		id: 3 // need id/token from auth
	};
};

export default connect(mapStateToProps)(FavRecipes);;