/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useInjectSaga} from 'redux-injectors';
import {initialState} from './reducer';

import {changeLocaleAction} from './actions';

export type ILanguageProviderProps = {};

const key = 'language';

const LanguageProvider: React.FC<ILanguageProviderProps> = props => {
  //   useInjectSaga({key, saga});

  return <>{React.Children.only(props.children)}</>;
};

export {LanguageProvider};
