import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Results</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});