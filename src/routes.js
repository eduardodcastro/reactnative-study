import React from 'react';
import { View } from 'react-native';

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
// Helpers
import { colors } from '~/styles';

import AuthFlow from '~/authFlow';
import Login from '~/pages/login';
import Task from '~/pages/App/task';
import Responsible from '~/pages/App/responsible';

const AuthLoading = createStackNavigator(
  {
    AuthFlow: {
      screen: AuthFlow,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Task: {
      screen: Task,
      // navigationOptions: {
      //   header: null,
      // },
    },
    Responsible: {
      screen: Responsible,
      // navigationOptions: {
      //   header: null,
      // },
    },
  },
  {
    // initialRouteName: 'Task',
    mode: 'card',
    // headerMode: 'none',
  },
);

const createNavigator = () =>
  createSwitchNavigator(
    {
      AuthLoading,
    },
    {
      initialRouteName: 'AuthLoading',
      headerMode: 'none',
    },
  );

const Routes = createAppContainer(createNavigator());

export default Routes;
