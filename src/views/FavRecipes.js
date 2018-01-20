import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  AsyncStorage } from 'react-native';
import AppStyles from '../../Style';

import Card from '../components/Card';
import Text from '../components/MyAppText';

export default class FavRecipes extends React.Component {
  static navigationOptions = {
    title: 'Favourite Recipes',
  };

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      url: Platform.OS === 'ios' ? 'localhost' : '10.0.2.2',
      recipes: []
    };
  }

  async componentWillMount() {
    const val = await AsyncStorage.getItem('userId');
    this.setState({ id: val });
    await this.getFavourites();
  }

  async getFavourites() {
    if (!this.state.id) {
      alert('no id');
      return;
    }
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const response = await fetch(`http://${this.state.url}:3000/api/users/${this.state.id}/favourites`, options);
      const results = await response.json();
      this.setState({ recipes: results });
    } catch (e) {
      alert(e);
    }
  }

  onPress(item) {
    this.props.onClickRecipe({ id: item.recipe_id });
    const { navigate } = this.props.navigation;
    navigate('RecipeDetail');
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.recipes}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => <Card idx={index} pic={item.pic} name={item.recipe_id} onPressItem={() => this.onPress(item)} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.color.darkPrimaryColor
  },
});
