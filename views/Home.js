import React from 'react';
import { Dimensions, TextInput, StyleSheet, Image, Text, View, FlatList, Button } from 'react-native';
import { InputText, InputCountrySelector, InputSwitch } from 'react-native-input-list';
import { SearchBar } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get(`window`).width

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentText:'',
      submittedText: '',
      ingredientList: [],
      results: []
    };
  }

  static navigationOptions = {
    title: 'recipeasy'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style = {styles.searchContainer}>
          <SearchBar inputStyle = {styles.searchBar}
            lightTheme
            onChangeText={(text) => this.setState({currentText: text})}
            placeholder='Type Here...' 
          />
          <Button
            title="Find Recipes"
            onPress={() => this.onSubmit()}
          />
          <View style={styles.container}>
            <FlatList
              data={this.state.results}
              renderItem={({item}) => <Text style={styles.item}>{item.label}</Text>}
            />
          </View>

        </View>
        
        
        </View>
    );
  }

  onSubmit() {
    list = this.parseIngredients(this.state.submittedText);
    // check what format this list should be
    dispatch(updateIngredients(list));

  }

  parseIngredients(ingredientList) {
    var a = 1;
  }

  // getRecipes() {
  //       const query = this.buildQuery(); // { from: 0, to: 3, calories: 1000 };
  //       let url = 'https://api.edamam.com/search';
  //       let queryString = '&...'
  //       const uri = url + queryString;
  //       fetch(`https://api.edamam.com/search?q=${FOOD}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10&calories=gte%20200,%20lte%20300&health=alcohol-free`)
  //         .then((response) => response.json())
  //         .then((json) => {
  //             const hits = json.hits;
  //             const results = hits.map((hit, index) => {
  //               const result = {
  //                   label: hit.recipe.label
  //               }
  //               return result
  //             });

  //             this.setState({
  //                 results: results,
  //             });

  //         })
  //         .catch(error => {
  //             console.error(error);
  //         });
  //   }

  handleKeyDown(e) {
    if (e.nativeEvent.key == "Enter") {
      this.setState((prevState, props) => {return {ingredients: prevState.ingredientList.push(this.state.currentText), submittedText: this.state.currentText}})
    }
  }
}

const styles = StyleSheet.create({
  searchBar: {
    width: DEVICE_WIDTH ,
    height: 50
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width:500,
  }
});
