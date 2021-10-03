import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColourButton extends Component {
  displayAlert() {
    alert('I am a alert box');
  }
  render(){
    return(
      <Button color={this.props.colour} title="Click Me" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColourButton colour='orange' />
        <Text>My First React Component</Text>
      </View>
    );
  }
}