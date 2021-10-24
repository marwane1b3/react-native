import axios, {AxiosRequestConfig} from 'axios';
import {AnyAction} from 'redux';
import {take, call, put, select, takeLatest} from 'redux-saga/effects';
import {MICROSERVICE_BASE_URL} from '../../utils/constants';
import request from '../../utils/request';
import {SIGN_UP_ACTION} from './constants';
import {setUserData, signUpActionFail} from './actions';

export function* SingUpSaga({payload}: AnyAction) {
  try {
    const formData: any = new FormData();
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
      url: `${MICROSERVICE_BASE_URL.INSCRIPTION}`,
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

      yield put(setUserData(payload));
    } else {
      yield put(signUpActionFail('erreur utilisateur non ajouter '));
    }
  } catch (error) {
    console.log('Network error');
    yield put(signUpActionFail(' Network error '));
  }
}

// Individual exports for testing
export default function* signUpScreenSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGN_UP_ACTION, SingUpSaga);
}
