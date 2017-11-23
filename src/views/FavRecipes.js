import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

export default class FavRecipes extends React.Component {
  static navigationOptions = {
    title: 'Favourite Recipes',
  };

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      recipes: []
    };
  }

  async componentWillMount() {
    await this.getFavourites();
  }

  async getFavourites() {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const id = this.props.id || 3;
      const response = await fetch(`http://10.0.2.2:3000/api/users/${id}/favourites`, options);
      const results = await response.json();
      this.setState({ recipes: results });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View>
        {this.state.recipes.map(r => <Text key={r.id}>{r.url}</Text>)}
      </View>
    );
  }
}