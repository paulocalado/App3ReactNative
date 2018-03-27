import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

class Top extends Component{
  render(){
    return(
        <View>
          <Image source={require('../../images/jokenpo.png')} />
        </View>
      );
  }
}

export default Top;