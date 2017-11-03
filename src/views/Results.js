import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity } from 'react-native';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props = props;
  }

  componentDidMount() {
    this.getRecipes();
  }

  parseIngredients() {
    ingredientArray = this.props.ingredients.split(",");
    ingredientArrayParsed = ingredientArray.map(function(ing) {
      return ing.replace(/\s/g, '');
    });
    return ingredientArrayParsed.join("-");
  }

  
  getRecipes() {
    const ingredientString = this.parseIngredients();
    fetch(`https://api.edamam.com/search?q=${ingredientString}&app_id=44e6e955&app_key=7e2bb0a7a3b159b732568229f8c7a473&from=0&to=6&calories=gte%20591,%20lte%20722&health=alcohol-free`)
      .then((response) => response.json())
      .then((res) => {
        const hits = res.hits;
        const results = hits.map((hit, index) => {
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
            recipeObjects: hits
          }
        });

      })
      .catch((e) => {
        console.error(e);
      });
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
    backgroundColor: '#F57C00',    
  },
  card: {
    display: 'flex',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#FFE0B2',    
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

