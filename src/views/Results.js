import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity } from 'react-native';
import AppStyles from '../../Style';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props = props;
  }

  componentDidMount() {
    this.YummlySearch();
    this.getRecipes();
  }

  parseIngredients() {
    ingredientArrayParsed = this.props.ingredients.map((ing, index) => ing.replace(/\s/g, ''));
    return ingredientArrayParsed.join("-");
  }

  async getRecipes() {
    const ingredientString = this.parseIngredients();
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${ingredientString}&app_id=44e6e955&app_key=7e2bb0a7a3b159b732568229f8c7a473`);
      const responseJson = await response.json();
      if (responseJson.hits.length == 0) {
        alert("No results");
        return;
      }

      const results = responseJson.hits.map((hit, index) => {
        return {
          id: index,
          key: hit.recipe.label,
          imgSrc: hit.recipe.image,
        };
      });
  
      this.setState((previousState) => {
        return {
          ...previousState,
          isLoading: false,
          recipes: results,
          recipeObjects: responseJson.hits
        };
      });
    } catch (e) {
      alert(e);
    }
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

    const response = await fetch('http://api.yummly.com/v1/api/recipes?requireRecipes=true&allowedIngredient[]=chicken&allowedIngredient[]=garlic', options);
    const res = await response.json();
    console.log(res.matches);
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
          <Text style={{alignSelf: 'center'}}>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.recipes}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => <Card idx={index} pic={item.imgSrc} name={item.key} onPressItem={() => this.onPress(index)} />}
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.darkPrimaryColor,    
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

