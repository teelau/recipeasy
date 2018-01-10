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
    StatusBar,
    Platform,
    AsyncStorage } from 'react-native';
import AppStyles from '../../Style';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'recipeasy'
  }

  constructor(props) {
    super(props);
    this.state = {
      usernameInput : '',
      passwordInput : '',
      url: Platform.OS === 'ios' ? 'localhost' : '10.0.2.2',
      userId: '',

    };
    this.props = props;
  }

  componentWillMount() {
    // check for id in local storage
    AsyncStorage.getItem('userId').then((value) => this.setState({ userId: value }, () => this.redirectToHome()));
  }

  redirectToHome() {
    if (this.state.userId) {
      console.log(this.state.userId);
      const { navigate } = this.props.navigation;
      navigate('Home');
    }
  }


  setUserId(value) {
    AsyncStorage.setItem('userId', value);
    this.setState({userId: value});
  }

  async LoginRequest() {
    if (this.state.usernameInput.length == 0 || this.state.passwordInput.length == 0) {
      alert("Username or password cannot be empty");
      return;
    }

    try {
      const response = await fetch(`http://${this.state.url}:3000/api/users/login`, {
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

      const responseJson = await response.json();
      if (response.status == 401) {
        alert("Username or password is incorrect");
      } else if (response.status == 200) {
        // set async store
        this.setUserId(responseJson.id.toString());
        const { navigate } = this.props.navigation;
        navigate('Home');
      }

    } catch (e) {
      alert(e);
    }
  }

  async CreateRequest() {
    if (this.state.usernameInput.length == 0 || this.state.passwordInput.length == 0) {
      alert("Username or password cannot be empty");
      return;
    }
    
    try {
      const response = await fetch(`http://${this.state.url}:3000/api/users/create`, {
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

      if (response.status == 400 || response.status == 500) {
        alert("Could not create user");
      } else if (response.status == 200) {
        alert("Created user");
      }

    } catch (e) {
      alert (e);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
      <Image style={elements.logo} source={require('../img/LogoLarge.png')} />
        <View>
          <TextInput //username input box
            autoCorrect = {false}
            autoCapitalize = "none"
            underlineColorAndroid = "transparent"
            style = {[styles.inputContainer, { marginBottom: 0}]}   //input text box style
            placeholder = "username or email" //text place holder words
            placeholderTextColor = 'white'     //text place holder color
            selectionColor = 'white'
            onChangeText ={ (usernameInput) => this.setState({usernameInput}) } //change state 
          />
          <TextInput //password input box
            secureTextEntry={true}
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
    backgroundColor: AppStyles.color.dividerColor,
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
