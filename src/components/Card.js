import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Text from './MyAppText';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getHiResImage();
  }

  async getHiResImage() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Yummly-App-ID': '133899ea',
        'X-Yummly-App-Key': '9d45e7e56426c6909e8aa11ea431fcef',
      }
    };

    const response = await fetch(`http://api.yummly.com/v1/api/recipe/${this.props.yummly}`, options);
    const res = await response.json();
    this.setState({ img: res.images[0].hostedMediumUrl || res.images[0].hostedSmallUrl });
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPressItem(this.props.name)}>
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.bg} source={{ uri: this.state.img || this.props.pic }} />
          </View>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: AppStyles.color.lightPrimaryColor,
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
    fontSize: 16,
    padding: 5
  }
});