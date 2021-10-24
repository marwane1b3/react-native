/**
 *
 * ProfileScreen
 *
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import makeSelectProfileScreen, {
  makeSelectError,
  makeSelectErrorMsg,
  makeSelectUserDetails,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validationSchema';
import ControlledTextInput from '../../components/ControlledTextInput';
import ToastComponent from '../../components/ToastComponent';
import {Icon} from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import theme from '../../utils/theme';
import {updateUserDataAction} from './actions';
const stateSelector = createStructuredSelector({
  profileScreen: makeSelectProfileScreen(),
  userDetails: makeSelectUserDetails,
  error: makeSelectError,
  loading: makeSelectLoading,
  errorMsg: makeSelectErrorMsg,
});

const key = 'profileScreen';

export const ProfileScreen: React.FC<IProfileScreenProps> = ({route}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
  const {user} = route.params;
  /* eslint-disable no-unused-vars */
  const {error, errorMsg, loading, profileScreen, userDetails} =
    useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  //console.log('user data ::', user);
  const [fileUri, SetFileuri] = useState('');
  console.log('@@@@errorMsg:::', errorMsg);

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
      console.log('updating action ::', forceData);
      dispatch(updateUserDataAction(forceData));
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
        defaultValue={user?.citizenship ? user?.citizenship : user?.civilité}
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
        defaultValue={user?.nom}
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
        defaultValue={user?.lastName ? user?.lastName : user?.prénom}
      />
      <ControlledTextInput
        control={control}
        label="email"
        showLabel
        name="email"
        editable={false}
        errorMessage={errors.email?.message}
        staticHolder="email@11.com"
        inputStyle={{
          borderRadius: 15,
        }}
        defaultValue={user?.email}
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
        defaultValue={user?.password}
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
        defaultValue={user?.adresse}
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
        defaultValue={user?.ville}
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
            // if clicked a new img
            fileUri
              ? {
                  uri: fileUri,
                }
              : user?.fileUri
              ? {
                  uri: user?.fileUri,
                }
              : {
                  uri: user?.photo,
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
              {'update'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {error && <ToastComponent error={errorMsg} success={''} />}
      {!error && Object.keys(userDetails)?.length > 0 && (
        <ToastComponent error={''} success={'donnez modifier'} />
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

export interface IProfileScreenProps {
  route: any;
}

export default ProfileScreen;
