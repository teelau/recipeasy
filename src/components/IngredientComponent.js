import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class IngredientComponent extends React.Component {


  constructor(props) {
    super(props)
    this.props = props;
  }


  render() {
    console.log(this.props);
    return (
      <View style={styles.ingredientContainer}>
        <Text style={elements.ingredientText}>{this.props.ingredient}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  ingredientContainer: {
    flex: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    
  },
});

const elements = StyleSheet.create({
  ingredientText: {
    color: 'white',
    fontSize: 12,
    marginBottom: 10,
  }
});

