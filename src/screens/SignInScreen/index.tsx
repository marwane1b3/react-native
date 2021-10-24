/**
 *
 * SignInScreen
 *
 */

import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import makeSelectSignInScreen, {
  makeSelectError,
  makeSelectLoading,
  makeSelectErrorMsg,
  makeSelectUserDetails,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import theme from '../../utils/theme';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validationSchema';
import ControlledTextInput from '../../components/ControlledTextInput';
import {useNavigation} from '@react-navigation/core';
import {signInAction} from './actions';
import ToastComponent from '../../components/ToastComponent';
import {useIsFocused} from '@react-navigation/core';

const stateSelector = createStructuredSelector({
  signInScreen: makeSelectSignInScreen(),
  error: makeSelectError,
  errorMsg: makeSelectErrorMsg,
  loading: makeSelectLoading,
  user: makeSelectUserDetails,
});

const key = 'signInScreen';

export const SignInScreen: React.FC<ISignInScreenProps> = ({}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
  const navigation = useNavigation();

  /* eslint-disable no-unused-vars */
  const {error, errorMsg, loading, user} = useSelector(stateSelector);
  const focus = useIsFocused();

  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  const {
    control,
    handleSubmit,

    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (payload: object) => {
    console.log(payload);

    dispatch(signInAction({...payload}));
  };
  const gotoSignUp = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (Object.keys(user)?.length > 0) {
      setTimeout(() => {
        navigation.navigate('Home', {user});
      }, 2000);
    }
  }, [user, focus]);
  return (
    <View style={styles.container}>
      <ControlledTextInput
        control={control}
        label="email"
        showLabel
        name="email"
        errorMessage={errors.email?.message}
        staticHolder="eg : abc@dd.com"
        inputStyle={{
          borderRadius: 15,
          width: '75%',
        }}
        defaultValue={''}
      />
      <ControlledTextInput
        control={control}
        label="password"
        showLabel
        name="password"
        errorMessage={errors.password?.message}
        staticHolder="**********"
        secureTextEntry={true}
        inputStyle={{
          borderRadius: 15,
          width: '75%',
        }}
        defaultValue={''}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          padding: 20,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{
              alignItems: 'center',
              padding: 10,
              backgroundColor: theme.palette.default.light,
              borderRadius: 50,
            }}>
            <Text style={{color: theme.palette.default.Encours, fontSize: 20}}>
              {'continuer'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={gotoSignUp}>
        <Text style={{color: theme.palette.default.light, fontSize: 18}}>
          {'vous navez pas de compte ? inscrivez vous!'}
        </Text>
      </TouchableOpacity>
      {error && <ToastComponent error={errorMsg} success={''} />}
      {!error && Object.keys(user)?.length > 0 && (
        <ToastComponent error={''} success={'connection reussi'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: theme.palette.default.crimson,
    padding: 25,
  },
});

export interface ISignInScreenProps {}

export default SignInScreen;
