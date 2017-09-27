import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Card name={item.key} />}
        />
      </View>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <View>
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
  item: {

  },
});