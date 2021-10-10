/**
 *
 * AppSettingsContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import makeSelectAppSettingsContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  appSettingsContainer: makeSelectAppSettingsContainer(),
});

const key = 'appSettingsContainer';

function AppSettingsContainer() {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  /* eslint-disable no-unused-vars */
  const {appSettingsContainer} = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return <></>;
}

AppSettingsContainer.propTypes = {};

export default AppSettingsContainer;
