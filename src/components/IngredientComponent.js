import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStyles from '../../Style';

export default class IngredientComponent extends React.Component {


  constructor(props) {
    super(props);
    this.props = props;
  }


  render() {
    return (
      <View style={styles.ingredientContainer}>

        <Text style={elements.ingredientText}>{this.props.ingredient}</Text>
        <TouchableOpacity style={elements.iconContainer}
          onPress={() => this.props.delete(this.props.ingredient)}>
          <MaterialCommunityIcons 
            name="close-circle" 
            size={20} 
            color="#FFE0B2"
          />
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  ingredientContainer: {
    borderColor: AppStyles.color.lightPrimaryColor,
    marginRight: 3,
    marginBottom: 3,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 50,
    
  },
});

const elements = StyleSheet.create({
  ingredientText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 6,
    marginRight: 4,
    marginTop: 2,
    marginBottom: 2,
  },
  iconContainer: {
    marginTop: 2,
    marginBottom: 2,
    marginRight: 4,
  }
});

