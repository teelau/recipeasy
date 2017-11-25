import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default class IngredientComponent extends React.Component {


  constructor(props) {
    super(props);
    this.props = props;
  }


  render() {
    return (
      <View style={styles.ingredientContainer}>
        <View style = {[{justifyContent: 'space-around'},{flexDirection: 'row'}]}>
          <Text style={elements.ingredientText}>{this.props.ingredient}</Text>
          <TouchableOpacity
            onPress={() => this.props.delete(this.props.ingredient)}>
            <Text> X </Text>
          </TouchableOpacity>
        </View>
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
    borderRadius: 50,
    
  },
});

const elements = StyleSheet.create({
  ingredientText: {
    color: 'white',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  }
});

