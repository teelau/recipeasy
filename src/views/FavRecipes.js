import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  AsyncStorage } from 'react-native';
import AppStyles from '../../Style';

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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.recipes}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => <Card idx={index} pic={item.pic} name={item.recipe_id} onPressItem={() => console.log('henlo')} />}
        />
      </View>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPressItem(this.props.name)}>
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.bg} source={{uri: this.props.pic}} />
          </View>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.color.darkPrimaryColor
  },
  card: {
    display: 'flex',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: AppStyles.color.lightPrimaryColor,
  },
  imgContainer: {
    flex: 2,
    flexDirection: 'row'
  },
  bg: {
    flex: 1,
    height: 150,
  },
  title: {
    flex: 1,
    fontSize: 16,
    padding: 5
  }
});
