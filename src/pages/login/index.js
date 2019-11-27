import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LogarUsuarioActions } from '~/store/ducks/logarUsuario';
// import { Creators as SolicitarRecuperacaoSenhaActions } from '~/store/ducks/solicitarRecuperacaoSenha';
// import { Creators as CadastrarNovoUsuarioActions } from '~/store/ducks/cadastrarNovoUsuario';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Platform,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import { colors, images } from '~/styles';
import styles from './styles';

class LogarUsuario extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Login',
      headerStyle: {
        backgroundColor: colors.sucess,
        borderBottomWidth: 0,
      },
      headerTintColor: colors.dark,
      headerTruncatedBackTitle: null,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  allowsInput = true;

  constructor(props) {
    super(props);

    this.state = {
      logInValid: false,
      userName: '',
    };
  }

  // async componentDidMount() {

  // }

  hasUpperCase = async string => {
    if (string === string.toLowerCase() && string.length > 0) {
      this.setState({ logInValid: true, userName: string });
    } else {
      this.setState({ logInValid: false });
    }
  };

  verifyLogin = async () => {
    const { logInValid, userName } = this.state;
    const { navigate } = this.props.navigation;
    if (logInValid) {
      await AsyncStorage.setItem('@Modeldev:user', JSON.stringify(userName));
      navigate('Task');
    }
  };

  render() {
    // console.tron.log('PROPS', this.props);
    const { navigation } = this.props;
    const { logInValid } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerHeader}>
          <Text style={styles.mainTitle}>TAREFA FÁCIL</Text>
        </View>
        <View style={styles.containerContent}>
          <View style={styles.circleContent}>
            <Icon
              name={Platform.OS === 'ios' ? 'tasks' : 'tasks'}
              color={colors.blackOpacity80}
              size={Platform.OS === 'ios' ? 120 : 120}
              // style={styles.iconCircle}
            />
          </View>
        </View>
        <View style={styles.containerFooter}>
          <View style={styles.containerInput}>
            <Text style={styles.textInput}>Nome</Text>
            <TextInput
              placeholder="Digite seu nome"
              placeholderTextColor={colors.blackOpacity80}
              underlineColorAndroid={colors.mediumGreyOpacity40}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              // style={[styles.inputText, this.state.styleTextColor]}
              style={styles.inputText}
              onChangeText={textName => this.hasUpperCase(textName)}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonLogIn}
            activeOpacity={0.8}
            disabled={!logInValid}
            onPress={() => this.verifyLogin()}
          >
            <LinearGradient
              colors={
                !logInValid
                  ? [colors.mediumGreyOpacity40, colors.littledark]
                  : [colors.lightBlue, colors.mediumBlue]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  logarUsuario: state.logarUsuario,
});

const allCreators = {
  ...LogarUsuarioActions,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(allCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogarUsuario);
