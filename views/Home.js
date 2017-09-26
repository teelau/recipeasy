import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'recipeasy'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{flex:0.4, resizeMode: 'contain', height: 220}}
            source={require('../img/sf_spoon.png')}
          />
          <Image
            style={{flex:0.6, resizeMode: 'contain', height: 220}}
            source={require('../img/sf_avocado.png')}
          />
        </View>
        <Button
          title="Search"
          onPress={() => navigate('Results')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});
