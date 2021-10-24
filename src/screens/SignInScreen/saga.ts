import axios, {AxiosRequestConfig} from 'axios';
import {AnyAction} from 'redux';
import {take, call, put, select, takeLatest} from 'redux-saga/effects';
import {MICROSERVICE_BASE_URL} from '../../utils/constants';
import request from '../../utils/request';
import {SIGN_IN_ACTION} from './constants';
import {signInActionFail, signInActionSuccess} from './actions';

export function* signInGenerator({data}: AnyAction) {
  try {
    const formData = new FormData();
    console.log('loginData ::::::', data);
    formData.append('email', data?.email);
    formData.append('password', data?.password);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: `${MICROSERVICE_BASE_URL.LOGIN}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    };

    const response: {data: {success: number; userDetails: object}} = yield call(
      async () => {
        const data: any = await request(config);
        return data;
      },
    );
    if (response?.data?.success === 1) {
      yield put(signInActionSuccess(response?.data?.userDetails));
    } else {
      yield put(signInActionFail('email ou mot de pass incorrect'));
    }
  } catch (error) {
    yield put(signInActionFail('erreur serveur ..'));
  }
}
export default function* signInScreenSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGN_IN_ACTION, signInGenerator);
}
