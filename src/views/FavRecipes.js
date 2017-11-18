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
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      recipes: []
    };
  }

  async getFavourites() {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const id = 3;
      const response = await fetch(`http://10.0.2.2:3000/api/users/3/favourites`, options);
      const results = await response.json();
      console.log(results);
      this.setState({ recipes: results });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View>
        <Text>WASSUP</Text>
        <Button title="Get Favs" onPress={() => this.getFavourites}></Button>
        {this.state.recipes.map(r => <Text>{r.url}</Text>)}
      </View>
    );
  }
}