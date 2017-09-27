import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default class Results extends React.Component {
  render() {
    const mockData = [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ];

    return (
      <View style={styles.container}>
        <FlatList
          data={mockData}
          renderItem={({item}) => <Card name={item.key} />}
        />
      </View>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.img}>IMAGE</Text>
        <Text>Name: {this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    margin: 10,
    backgroundColor: 'lightblue',
  },
  img: {
    alignSelf: 'center',
  },
});