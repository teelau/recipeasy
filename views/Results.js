import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  StatusBar } from 'react-native';

export default class Results extends React.Component {
  render() {
    const mockData = [
      {key: 'Pizza'},
      {key: 'Burgers'},
      {key: 'Sushi'},
      {key: 'Tacos'},
      {key: 'Omelette'},
      {key: 'Cookies'},
      {key: 'Cake'},
      {key: 'Spaghetti'},
    ];

    return (
      <View style={styles.container}>
        <FlatList
          data={mockData}
          renderItem={({item, index}) => <Card idx={index} name={item.key} />}
        />
      </View>
    )
  }
}

class Card extends React.Component {
  render() {
    const imgSrc = this.props.idx % 2 === 0 ? require('../img/pizza.png') : require('../img/burgers.png');
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.bg} source={imgSrc} />
        </View>
        <Text style={styles.title}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    display: 'flex',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  imgContainer: {
    flex: 2,
    flexDirection: 'row'
  },
  bg: {
    flex: 1,
    height: 150,
  },
  title: {
    flex: 1,
  }
});