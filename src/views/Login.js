import React from 'react';
import { 
    Dimensions,
    StyleSheet, 
    Image, 
    Text, 
    View, 
    Button,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView } from 'react-native';

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

  LoginRequest() {
    return fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.usernameInput,
        password: this.state.passwordInput,
      })
    })
  }

  CreateRequest() {
    return fetch('http://localhost:3000/api/users/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.usernameInput,
        password: this.state.passwordInput,
      })
    })
  }
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <TextInput //username input box
            underlineColorAndroid = "transparent"
            style = {[styles.inputContainer, { marginBottom: 0}]}   //input text box style
            placeholder = "username or email" //text place holder words
            placeholderTextColor = "#FFF"     //text place holder color
            selectionColor = "#FFF"
            onChangeText ={ (usernameInput) => this.setState({usernameInput}) } //change state 
          />
          <TextInput //password input box
            underlineColorAndroid = "transparent"
            style = {styles.inputContainer}   //input text box style
            placeholder = "password"          //text place holder words
            placeholderTextColor = "#FFF"     //text place holder color
            selectionColor = "#FFF"
            onChangeText ={ (passwordInput) => this.setState({passwordInput}) } //change state
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log( this.state.usernameInput + ' ' + this.state.passwordInput )}>
          <Text style = {styles.submit}> login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log( this.state.usernameInput + ' ' + this.state.passwordInput )}>
          <Text style = {[styles.submit, {marginBottom : 0}]}> sign up </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#F57C00',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fba'
  },
  submit: {
    padding: 10,
    marginBottom: 10,
    width: DEVICE_WIDTH,
    fontSize: 28,
    textAlign: 'center',
    color: '#F57C00',
    backgroundColor: '#FFE0B2',
  },
});
