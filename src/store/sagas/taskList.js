import api from '~/services';
import { call, put } from 'redux-saga/effects';
import Analytics from 'appcenter-analytics';
import FuncoesUteis from '~/utils';

import { Creators as taskListActions } from '~/store/ducks/taskList';
import global from '~/services/global';

export function* TaskListRequest(action) {
  try {
    const response = yield call(api.get, 'todos');
    if (!response.data.erro) {
      // Analytics.trackEvent('Login', { Status: 'Acessou' });
      yield put(taskListActions.taskListSuccess(response.data));
    } else {
      yield put(taskListActions.taskListError(response.data.mensagem));
    }
  } catch (err) {
    yield put(taskListActions.taskListError(global.noconnection));
  }
}
