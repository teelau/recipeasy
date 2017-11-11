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
    KeyboardAvoidingView,
    StatusBar } from 'react-native';

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

  async LoginRequest() {
    let response = await fetch('http://10.0.2.2:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.usernameInput,
        password: this.state.passwordInput,
      })
    });

    response = await response.json();
  }

  CreateRequest() {
    return fetch('http://10.0.2.2:3000/api/users/create', {
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
      
      <Image style={elements.logo} source={require('../img/LogoLarge.png')} />
        <View>
          <TextInput //username input box
            underlineColorAndroid = "transparent"
            style = {[styles.inputContainer, { marginBottom: 0}]}   //input text box style
            placeholder = "username or email" //text place holder words
            placeholderTextColor = 'white'     //text place holder color
            selectionColor = 'white'
            onChangeText ={ (usernameInput) => this.setState({usernameInput}) } //change state 
          />
          <TextInput //password input box
            underlineColorAndroid = "transparent"
            style = {styles.inputContainer}   //input text box style
            placeholder = "password"          //text place holder words
            placeholderTextColor = 'white'     //text place holder color
            selectionColor = 'white'
            onChangeText ={ (passwordInput) => this.setState({passwordInput}) } //change state
          />
        </View>
        <TouchableOpacity
          onPress={() => this.LoginRequest()}>
          <Text style = {styles.submit}> login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.CreateRequest()}>
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
    backgroundColor: AppStyles.color.darkPrimaryColor,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: AppStyles.color.dividerColor
  },
  submit: {
    padding: 10,
    marginBottom: 10,
    width: DEVICE_WIDTH,
    fontSize: 28,
    textAlign: 'center',
    color: AppStyles.color.darkPrimaryColor,
    backgroundColor: AppStyles.color.lightPrimaryColor,
  },
});

const elements = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: 250,
    width: 250,
  }
});
