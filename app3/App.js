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
  Image,
} from 'react-native';

import Top from './src/components/top';
import Icon from './src/components/icon';

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

    this.state = { userChoice : '', computerChoice: '',
                   result: ''};
    this.setState = this.setState.bind(this);
  }

 jokenpoFunction(userChoice){
    var computerChoice = '';
    var randomNumber = Math.floor(Math.random()*3);
    var result = '';
        switch(randomNumber){
          case 0: 
            computerChoice = 'pedra';
            break;
          case 1: 
            computerChoice = 'papel';
            break;
          case 2:  
            computerChoice = 'tesoura';
            break;
        }

   if(userChoice === computerChoice){
        result = 'Empate';
    }else{
       if(userChoice === 'pedra'){
        if(computerChoice === 'papel'){
          result = 'Você Perdeu!'
        }else{
          result = 'Você Venceu!'
        }
      }
      if(userChoice === 'papel'){
        if(computerChoice === 'tesoura'){
          result = 'Você Perdeu!'
        }else{
          result = 'Você Venceu!'
        }
      }
      if(userChoice === 'tesoura'){
        if(computerChoice === 'pedra'){
          result = 'Você Perdeu!'
        }else{
          result = 'Você Venceu!'
        }
      }
    }
      this.setState({userChoice : userChoice,
                     computerChoice : computerChoice,
                     result : result});   
 }

  render() {
    const {container, textTouchable,
           touchableStyle, panelStyle,
            bottomStyle, textResult} = styles;
    return (
      <View style={container}>

        <Top></Top>
        <View style={panelStyle}>
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

        <View style={bottomStyle}>
          <Icon choice={this.state.computerChoice} player={'Computador'}></Icon>
          <Icon choice={this.state.userChoice} player={'Usuário'}></Icon>
         
          <Text style={textResult}>{this.state.result}</Text>
        </View>

       
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
  bottomStyle: {
    alignItems: 'center',
    marginTop: 10
  },
  textTouchable: {
    backgroundColor: '#577848',
    color: '#fff',
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
  touchableStyle: {
    marginTop: 10,
    width: 120,
    alignItems: 'center'
  },
  panelStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#577848'
  }
});
