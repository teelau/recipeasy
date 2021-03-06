import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import AppStyles from '../../Style';

import Card from '../components/Card';
import Text from '../components/MyAppText';

import QueryString from 'query-string';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props = props;
  }

  componentDidMount() {
    this.YummlySearch();
  }

  async YummlySearch() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Yummly-App-ID': '133899ea',
        'X-Yummly-App-Key': '9d45e7e56426c6909e8aa11ea431fcef',
      }
    };

    let ingredientString;
    if (this.props.ingredients.length > 1) {
      ingredientString = QueryString.stringify({ allowedIngredient: this.props.ingredients }, { arrayFormat: 'bracket' });
    } else {
      ingredientString = `&allowedIngredient[]=${this.props.ingredients[0]}`;
    }

    const response = await fetch(`http://api.yummly.com/v1/api/recipes?requirePictures=true${ingredientString}`, options);
    const res = await response.json();
    if (res.matches.length > 0) {
      const matches = res.matches.map((hit, index) => {
        return {
          id: index,
          yummly: hit.id,
          key: hit.recipeName,
          imgSrc: hit.smallImageUrls[0]
        };
      });

      this.setState((previousState) => {
        return {
          ...previousState,
          isLoading: false,
          recipes: matches,
          recipeObjects: res.matches
        };
      });

    } else {
      alert('no results');
    }
  }

  onPress(recipeIndex) {
    this.props.onClickRecipe(this.state.recipeObjects[recipeIndex]);
    const { navigate } = this.props.navigation;
    navigate('RecipeDetail');
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text style={{ alignSelf: 'center' }}>LOADING...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.recipes}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => <Card idx={index} yummly={item.yummly} pic={item.imgSrc} name={item.key} onPressItem={() => this.onPress(index)} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.darkPrimaryColor,
  }
});

