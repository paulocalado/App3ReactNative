import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

class Icon extends Component{
  render(){
   // this.props.choice;
   // this.props.user;
    
    if(this.props.choice == 'pedra'){

      return(
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('../../images/pedra.png')}/>
        </View>
        );

    }else if(this.props.choice == 'papel'){

      return(
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('../../images/papel.png')}/>
        </View>
        );

    }else if(this.props.choice == 'tesoura'){
      return(
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('../../images/tesoura.png')}/>
        </View>
        );

    }else {
      return false;
    }

  }
}

export default Icon;