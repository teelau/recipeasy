import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity } from 'react-native';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getRecipes();
  }
  
  getRecipes() {
    fetch('https://api.edamam.com/search?q=chicken&app_id=44e6e955&app_key=7e2bb0a7a3b159b732568229f8c7a473&from=0&to=6&calories=gte%20591,%20lte%20722&health=alcohol-free')
      .then((response) => response.json())
      .then((res) => {
        const hits = res.hits;
        const results = hits.map((hit, index) => {
          return {
            id: index,
            key: hit.recipe.label,
            imgSrc: hit.recipe.image,
          };
        });

        this.setState((previousState) => {
          return {
            ...previousState,
            isLoading: false,
            recipes: results,
          }
        });

      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text style={{alignSelf: 'center'}}>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.recipes}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => <Card idx={index} pic={item.imgSrc} name={item.key} onPressItem={() => console.log("Pressed Item")} />}
        />
      </View>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPressItem(this.props.name)}>
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.bg} source={{uri: this.props.pic}} />
          </View>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
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

