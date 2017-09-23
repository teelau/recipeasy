import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style = {{flex:1, flexDirection: 'column',alignItems: 'center'}}>
         <Image
           style={{flex:0.4, resizeMode: 'contain', width:220,height: 220}}
           source={require('./img/sf_name.png')}
         />      
        <View style = {{flex:1, flexDirection: 'row',alignItems: 'center'}}>
          <Image
            style={{flex:0.4, resizeMode: 'contain', height: 220}}
            source={require('./img/sf_spoon.png')}
          />
          <Image
            style={{flex:0.6, resizeMode: 'contain', height: 220}}
            source={require('./img/sf_avocado.png')}
          />
        </View>
        {/* <Button
          onPress = {() => {Alert.alert(':D')}}
          title = "Feed Me"
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
