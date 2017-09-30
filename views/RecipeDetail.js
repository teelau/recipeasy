import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';

export default class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{alignSelf: 'center'}}>
        <Text>Recipe: {params.name}</Text>
      </View>
    );
  }
}