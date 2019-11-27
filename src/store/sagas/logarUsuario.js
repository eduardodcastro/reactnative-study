import api from '~/services';
import { call, put } from 'redux-saga/effects';
import Analytics from 'appcenter-analytics';
import FuncoesUteis from '~/utils';

import { Creators as logarUsuarioActions } from '~/store/ducks/logarUsuario';
import global from '~/services/global';

export function* LogarUsuarioRequest(action) {
  try {
    const response = yield call(api.get, 'users');
    if (!response.data.erro) {
      // Analytics.trackEvent('Login', { Status: 'Acessou' });
      yield put(logarUsuarioActions.logarUsuarioSuccess(response.data));
    } else {
      yield put(logarUsuarioActions.logarUsuarioError(response.data.mensagem));
    }
  } catch (err) {
    yield put(logarUsuarioActions.logarUsuarioError(global.noconnection));
  }
}
