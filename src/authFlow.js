/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';

class AuthFlow extends Component {
  constructor(props) {
    super(props);
    this.bootAsync();
  }

  bootAsync = async () => {
    const { navigation } = this.props;

    const userToken = await AsyncStorage.getItem('@Modeldev:user');

    navigation.navigate(userToken ? 'Task' : 'Login');
  };

  render() {
    return <View />;
  }
}

export default AuthFlow;
