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

const DEVICE_WIDTH = Dimensions.get(`window`).width;
const MOCK_INGREDIENTS = [{ label: 'green peppers' }, { label: 'eggs' }, { label: 'onion' }, { label: 'cheese' }]

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
              style={{ marginTop: 5 }}
              data={MOCK_INGREDIENTS}
              renderItem={({item}) => <Item label={item.label}/>}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>

        <Button
          title='Find Recipes'
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
    backgroundColor: '#F57C00',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  remove: {
    padding: 2,
    color: '#F57C00',
    backgroundColor: 'white',
    borderColor: '#F57C00',
    borderRadius: 50
  },
  submit: {
    
  },
});