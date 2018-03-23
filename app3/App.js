/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = { userChoice : ''};
    this.setState = this.setState.bind(this);
  }

 jokenpoFunction(userChoice){
    this.setState({userChoice : userChoice});
 }

  render() {
    const {container, textTouchable,
           touchableStyle} = styles;
    return (
      <View style={container}>
        <Text>Escolha do usuário: {this.state.userChoice}</Text>
        <Text>Escolha do Computador</Text>
        <Text>Resultado</Text>

        <TouchableOpacity style={touchableStyle} onPress={() => {this.jokenpoFunction('pedra')}}>
          <Text style={textTouchable}>Pedra</Text>
        </TouchableOpacity>

        <TouchableOpacity style={touchableStyle} onPress={() => {this.jokenpoFunction('papel')}}>
          <Text style={textTouchable}>Papel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={touchableStyle} onPress={() => {this.jokenpoFunction('tesoura')}}>
          <Text style={textTouchable}>Tesoura</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const chanteTExt = () =>{
  this.setState({texto: 'Clicou botao dois'})
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D19F8E',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textTouchable: {
    backgroundColor: '#577848',
    color: '#fff',
    fontSize: 20,
    padding: 10,
    margin: 5
  },
  touchableStyle: {
    alignItems: 'center'
  }
});
