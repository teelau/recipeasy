import React from 'react';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView } from 'react-native';
import AppStyles from '../../Style';
import IngredientComponent from '../components/IngredientComponent';

const DEVICE_WIDTH = Dimensions.get(`window`).width;
const MOCK_INGREDIENTS = [{ label: 'green peppers' }, { label: 'eggs' }, { label: 'onion' }, { label: 'cheese' }]

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      ingredients: []
    };
    this.props = props;
  }

  parseIngredients(ingredientList) {
    return "TEST TEST";
  }

  onPress(text) {
    const { navigate } = this.props.navigation;
    this.props.onSubmitIngredients(this.state.ingredients);
    navigate('Results');
  }

  goToFavourites() {
    const { navigate } = this.props.navigation;
    navigate('Favs');
  }

  onEnter(text) {
    let newIngredients = this.state.ingredients;
    newIngredients.push(text);
    this.setState({ingredients: newIngredients});
  }

  ingredientsList() {
    return this.state.ingredients.map((ingredient, index) => {
      return (
        <IngredientComponent ingredient={ingredient} key={index}/>
      )
    });
  }

  deleteIngredient(ingredient) {
    let index = this.state.ingredients.indexOf(ingredient);
    this.state.ingredients.splice(index, 1);
    this.setState({ingredients: this.state.ingredients});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image style={elements.logo} source={require('../img/LogoLarge.png')} />
          <Text style={elements.hint}>Add some ingredients!</Text>

          <View style={styles.resultsContainer}>
            <TextInput 
              style={elements.searchBar}
              onSubmitEditing={(t) => this.onEnter(t.nativeEvent.text)}
              placeholder='Search Ingredients...'
              underlineColorAndroid='transparent'
            />
            
          </View>

          <View style = {styles.ingredientContainer}>
            {this.state.ingredients.map((ingredient, index) => 
              <IngredientComponent 
                ingredient={ingredient} 
                key={index} 
                delete={(ingredient) => this.deleteIngredient(ingredient)}/>)}
          </View>
          
        </View>

        <View>
          <TouchableOpacity onPress={() => this.goToFavourites()}>
            <Text style={elements.submit}>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPress()}>
            <Text style={elements.submit}>Find Recipes</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
//onChangeText={(t) => this.setState({ currentText: t })}

class Item extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', margin: 5 }}>
        <Text style={[{ flex: 3}, elements.item]}>{this.props.label}</Text>
        {/* <Text style={[{ textAlign: 'center', flex: 0.3 }, elements.remove]}>X</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: AppStyles.color.darkPrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: AppStyles.color.darkPrimaryColor,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 300,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: 500,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'column'
  },
});

const elements = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: 250,
    width: 250,
  },
  hint: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  searchBar: {
    width: 300,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  item: {
    padding: 10,
    color: 'white',
    backgroundColor: AppStyles.color.darkPrimaryColor,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  remove: {
    padding: 2,
    color: AppStyles.color.darkPrimaryColor,
    backgroundColor: 'white',
    borderColor: AppStyles.color.darkPrimaryColor,
    borderRadius: 50
  },
  submit: {
    padding: 10,
    width: DEVICE_WIDTH,
    fontSize: 28,
    textAlign: 'center',
    color: AppStyles.color.darkPrimaryColor,
    backgroundColor: AppStyles.color.lightPrimaryColor,
  },
});