/**
 *
 * SignUpScreen
 *
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import makeSelectSignUpScreen, {
  makeSelectLoading,
  makeSelectUser,
  makeSelecterror,
  makeSelecterrorMsg,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import theme from '../../utils/theme';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validationSchema';
import ControlledTextInput from '../../components/ControlledTextInput';
import {signUpAction} from './actions';
import * as ImagePicker from 'react-native-image-picker';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';
import ToastComponent from '../../components/ToastComponent';
import {useIsFocused} from '@react-navigation/core';
const stateSelector = createStructuredSelector({
  signUpScreen: makeSelectSignUpScreen(),
  user: makeSelectUser,
  error: makeSelecterror,
  loading: makeSelectLoading,
  errorMsg: makeSelecterrorMsg,
});

const key = 'signUpScreen';

export const SignUpScreen: React.FC<ISignUpScreenProps> = ({}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
  const [fileUri, SetFileuri] = useState('');
  const navigation = useNavigation();
  const focus = useIsFocused();
  /* eslint-disable no-unused-vars */
  const {error, errorMsg, loading, user} = useSelector(stateSelector);

  useEffect(() => {
    if (Object.keys(user)?.length > 0) {
      setTimeout(() => {
        navigation.navigate('Home', {user});
      }, 2000);
    }
  }, [user, focus]);
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
    //
    //
    const forceData: object = {...payload, fileUri};
    if (!fileUri) {
      SetFileuri((prevState: string) => {
        return (prevState =
          'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png');
      });
    }

    if (fileUri) {
      dispatch(signUpAction(forceData));
    }
    //  console.log('my data', data);
  };

  const chooseImage = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'requesting permission to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 100,
            maxWidth: 100,
          },
          (response: any) => {
            console.log(response?.assets);
            SetFileuri(response?.assets[0]?.uri);
            if (response?.assets) {
              // dispatch(getUploadDataAction(response?.assets[0]));
              console.log(response?.assets[0]?.uri);
            }
          },
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const gotoSignin = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView scrollEnabled contentContainerStyle={styles.container}>
      <ControlledTextInput
        control={control}
        label="citizenship"
        showLabel
        name="citizenship"
        errorMessage={errors.citizenship?.message}
        staticHolder="eg : marocain"
        inputStyle={{
          borderRadius: 15,
        }}
        defaultValue={''}
      />
      <ControlledTextInput
        control={control}
        label="nom"
        showLabel
        name="nom"
        errorMessage={errors.nom?.message}
        staticHolder="eg : marwane"
        inputStyle={{
          borderRadius: 15,
        }}
        defaultValue={''}
      />
      <ControlledTextInput
        control={control}
        label="lastName"
        showLabel
        name="lastName"
        errorMessage={errors.lastName?.message}
        staticHolder="eg : akef"
        inputStyle={{
          borderRadius: 15,
        }}
        defaultValue={''}
      />
      <ControlledTextInput
        control={control}
        label="email"
        showLabel
        name="email"
        errorMessage={errors.email?.message}
        staticHolder="email@11.com"
        inputStyle={{
          borderRadius: 15,
        }}
        defaultValue={''}
      />
      <ControlledTextInput
        control={control}
        label="password"
        showLabel
        name="password"
        errorMessage={errors.password?.message}
        staticHolder="*******"
        inputStyle={{
          borderRadius: 15,
        }}
        defaultValue={''}
        secureTextEntry={true}
      />
      <ControlledTextInput
        control={control}
        label="adresse"
        showLabel
        name="adresse"
        errorMessage={errors.adresse?.message}
        staticHolder="eg : casa 15 ...."
        inputStyle={{
          borderRadius: 15,
        }}
        defaultValue={''}
      />
      <ControlledTextInput
        control={control}
        label="ville"
        showLabel
        name="ville"
        errorMessage={errors.ville?.message}
        staticHolder=" eg : bueno siruis"
        inputStyle={{
          borderRadius: 15,
        }}
        defaultValue={''}
        secureTextEntry={true}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          position: 'relative',
          // backgroundColor: 'red',
          width: '100%',
        }}>
        <Text style={styles.title}>picture :</Text>
        <Image
          style={{
            width: 150,
            height: 150,
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius: 150,
          }}
          source={
            fileUri
              ? {uri: fileUri} // if clicked a new img
              : {
                  uri: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
                }
          } //else show random
        />
        <TouchableOpacity style={styles.addPictureIcon} onPress={chooseImage}>
          <Icon name="camera" size={35} />
        </TouchableOpacity>
      </View>

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
      <TouchableOpacity onPress={gotoSignin}>
        <Text style={{color: theme.palette.default.light, fontSize: 20}}>
          {'vous avez un compte ? Connectez vous!'}
        </Text>
      </TouchableOpacity>
      {error && <ToastComponent error={errorMsg} success={''} />}
      {!error && Object.keys(user)?.length > 0 && (
        <ToastComponent error={''} success={'utilisateur ajouter'} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: theme.palette.default.crimson,
    padding: 25,
  },
  addPictureIcon: {
    height: 35,
    width: 35,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    left: 279,
    top: 110,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  title: {
    alignSelf: 'center',
    paddingRight: 30,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.default.light,
  },
});

export interface ISignUpScreenProps {}

export default SignUpScreen;
