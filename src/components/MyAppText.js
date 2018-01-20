import React, {Component} from 'react';
import { Text } from 'react-native';
import { platformFont } from './platformModule';


export default class MyAppText extends Component {

  constructor(props) {
    super(props)
    // Put your default font styles here. 
    font = platformFont();
    this.style = [{fontFamily: font}]; 
    if( props.style ) {
      if( Array.isArray(props.style) ) {
        this.style = this.style.concat(props.style)
      } else {
        this.style.push(props.style)
      }
    }
  }
  render() { return (
    <Text {...this.props} style={this.style}>
      {this.props.children}
    </Text>
  )}
}

