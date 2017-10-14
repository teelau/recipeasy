import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from '../views/Home';
import Results from '../views/Results';
import RecipeDetail from '../views/RecipeDetail';

export const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Results: { screen: Results },
  RecipeDetail: { screen: RecipeDetail }
});

// App component with navigation state
const AppWithNavigationState = ({ dispatch, nav }) => (
	<AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})} />
);

AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
