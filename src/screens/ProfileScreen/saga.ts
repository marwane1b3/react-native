import axios, {AxiosRequestConfig} from 'axios';
import {AnyAction} from 'redux';
import {take, call, put, select, takeLatest} from 'redux-saga/effects';
import {MICROSERVICE_BASE_URL} from '../../utils/constants';
import request from '../../utils/request';
import {UPDATE_USER_DATA_ACTION} from './constants';
import {updateUserDataFailction, updateUserDataSuccessAction} from './actions';

export function* updateSagaGenerator({payload}: AnyAction) {
  try {
    const formData: any = new FormData();

    console.log('@@@last payload:::', payload);

    formData.append('nom', payload?.nom);
    formData.append('citizenship', payload?.citizenship);
    formData.append('lastName', payload?.lastName);
    formData.append('password', payload?.password);
    formData.append('email', payload?.email);
    formData.append('ville', payload?.ville);
    formData.append('adresse', payload?.adresse);
    formData.append('image', {
      uri: payload?.fileUri,
      type: 'image/jpeg',
      name: `+__ID${Math.random().toString()}profile_picture.jpg`,
    });
    console.log('payload.fileUri ::', payload);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: `${MICROSERVICE_BASE_URL.MODIFICATION}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    };
    const response: {data: {success: number}} = yield call(async () => {
      const data: any = await request(config);
      return data;
    });

    if (response.data.success === 1) {
      // console.log('response ::::: 1');

      ///// user created

      yield put(updateUserDataSuccessAction(payload));
    } else {
      yield put(updateUserDataFailction('erreur utilisateur non modifier '));
    }
  } catch (error) {
    console.log('Network error');
    yield put(updateUserDataFailction(' Network error '));
  }
}

// Individual exports for testing
export default function* updateSagaScreen() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(UPDATE_USER_DATA_ACTION, updateSagaGenerator);
}
