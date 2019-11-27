import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, text, images, metrics, general } from '~/styles';
import styles from './styles';

export default class TaskItems extends Component {
  constructor() {
    super();
  }

  getUser = dataResponsible => {
    const { onPress } = this.props;
    onPress(dataResponsible);
    // console.tron.log('CLICOU', dataResponsible);
  };

  render() {
    const { idTask, userId, title, status, listUsers, onPress } = this.props;

    let result;

    result = _.filter(listUsers, item => {
      return item.id === userId;
    });

    const [dataResponsible] = result;
    const nameResponsible = dataResponsible.name;

    return (
      <View>
        <View style={styles.containerList}>
          <View style={styles.boxLeft} />
          <View style={styles.boxRight}>
            <View style={styles.checkmark}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                color={colors.green}
                size={Platform.OS === 'ios' ? 20 : 20}
                style={
                  status ? styles.iconCheckmark : styles.iconCheckmarkDisable
                }
              />
            </View>

            <View style={styles.infoData}>
              <Text>{title}</Text>
              <Text>Concluída: {status ? 'sim' : 'não'}</Text>
              <TouchableOpacity
                style={styles.buttonLogIn}
                activeOpacity={0.8}
                onPress={() => this.getUser(dataResponsible)}
              >
                <Text>Responsável: {nameResponsible}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
