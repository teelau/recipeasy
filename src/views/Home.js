import React from 'react';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Button } from 'react-native';

const DEVICE_WIDTH = Dimensions.get(`window`).width

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentText: ""};
    this.props = props;
  }

  parseIngredients(ingredientList) {
    return "TEST TEST";
  }

  onPress() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    this.props.onSubmitIngredients(this.state.currentText);
    navigate('Results');

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.searchContainer}>
          <Image style={elements.logo} source={require('../img/LogoLarge.png')} />
          <Text style={elements.hint}>Add some ingredients!</Text>

          <View style={styles.resultsContainer}>
            <TextInput style={elements.searchBar}
              onChangeText={(text) => this.setState({currentText: text})}
              placeholder='Search Ingredients...' 
            />
            <FlatList
              data={this.state.currentText}
              renderItem={({item}) => <Text style={styles.item}>{item.label}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>

        <Button
          title="Find Recipes"
          style={elements.submit}
          onPress={() => {this.onPress()}}
        />

      </View>
    );
  }

  // handleKeyDown(e) {
  //   if (e.nativeEvent.key == "Enter") {
  //     this.setState((prevState, props) => {return {ingredients: prevState.ingredientList.push(this.state.currentText), submittedText: this.state.currentText}})
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F57C00',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'black',  
  },
  submit: {
    
  },
});