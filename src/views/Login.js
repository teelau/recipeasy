import React from 'react';
import { 
    Dimensions,
    StyleSheet, 
    Image, 
    Text, 
    View, 
    Button,
    TouchableOpacity,
    TextInput, } from 'react-native';
const DEVICE_WIDTH = Dimensions.get(`window`).width;

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'recipeasy'
  }

  constructor(props) {
    super(props);
    this.state = {
      usernameInput : '',
      passwordInput : ''
    };
  }
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <TextInput //
            style = {styles.inputContainer}   //input text box style
            placeholder = "username or email" //text place holder words
            placeholderTextColor = "#FFF"     //text place holder color
            onChangeText ={ (usernameInput) => this.setState({usernameInput}) } //change state 
          />
          <TextInput 
            style = {styles.inputContainer}
            placeholder = "password"
            placeholderTextColor = "#FFF"
            onChangeText ={ (passwordInput) => this.setState({passwordInput}) }
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log( this.state.usernameInput + ' ' + this.state.passwordInput )}>
          <Text style = {styles.submit}> login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F57C00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fba'
  },
  submit: {
    padding: 10,
    width: DEVICE_WIDTH,
    fontSize: 28,
    textAlign: 'center',
    color: '#F57C00',
    backgroundColor: '#FFE0B2',
  },
});
