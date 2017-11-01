import React from 'react';
import { Dimensions, TextInput, StyleSheet, Image, Text, View, FlatList, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get(`window`).width

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {currentText: ""};
    this.props = props;
    // this.onPress = this.onPress.bind(this);
  }

  parseIngredients(ingredientList) {
    return "TEST TEST";
  }

  onPress() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    this.props.onSubmitIngredients(this.state.currentText);
    console.log(this.state.currentText);
    navigate('Results');

  }

  render() {
    return (
      <View style={styles.container}>
        <View style ={styles.searchContainer}>
          <SearchBar inputStyle={styles.searchBar}
            lightTheme
            onChangeText={(text) => this.setState({currentText: text})}
            placeholder='Type Here...' 
          />
        
          <Button
            title="Find Recipes"
            onPress={() => {this.onPress()}}
          />
          <View style={styles.container}>
            <FlatList
              data={this.state.currentText}
              renderItem={({item}) => <Text style={styles.item}>{item.label}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
          
        </View>
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
