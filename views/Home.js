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
    // dispatch action?
    dispatch(updateIngredients(list));

  }

  parseIngredients(ingredientList) {
    // parse list of ingredients (split on delimiter?)
  }

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
