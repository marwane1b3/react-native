/**
 *
 * MapViewScreen
 *
 */

import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import makeSelectMapViewScreen, {
  makeSelectBlockLocation,
  makeSelectCityLocation,
  makeSelectNeighborhoodLocation,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import MapView, {LatLng, Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useIsFocused} from '@react-navigation/native';
import theme from '../../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  getSelectedCityAction,
  getSelectedBlockAction,
  getSelectedNeighborhoodAction,
} from './actions';

const stateSelector = createStructuredSelector({
  mapViewScreen: makeSelectMapViewScreen(),
  cityLocation: makeSelectCityLocation,
  blockLocation: makeSelectBlockLocation,
  neighborhoodLocation: makeSelectNeighborhoodLocation,
});

const key = 'mapViewScreen';

export const MapViewScreen: React.FC<IMapViewScreenProps> = ({}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  /* eslint-disable no-unused-vars */
  const {mapViewScreen, cityLocation, blockLocation, neighborhoodLocation} =
    useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  const mapRef: any = useRef(null);
  const [zoom, setZomm] = React.useState(6);
  const [currentLocation, setCurrentLocation] = React.useState<LatLng>({
    latitude: 31.794525,
    longitude: -7.0849336,
  });

  const googleAutocompletRef: any =
    useRef<typeof GooglePlacesAutocomplete>(null);
  const isFocused: any = useIsFocused();
  React.useEffect(() => {
    if (mapRef && mapRef.current) {
      mapRef.current.animateCamera(
        {
          center: {
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          },
          zoom: zoom,
        },
        {
          duration: 600,
        },
      );
      return;
    } else {
      return;
    }
  }, [mapRef.current, isFocused, currentLocation, zoom]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: theme.dimensions.height,
        width: theme.dimensions.width,
      }}>
      <MapView
        style={{flex: 0.5}}
        ref={mapRef}
        initialRegion={{
          ...currentLocation,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
        loadingEnabled
        initialCamera={{
          center: {
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          },
          pitch: 0,
          zoom: 6,
          heading: 0,
          altitude: 0,
        }}></MapView>
      <SafeAreaView
        pointerEvents="box-none"
        style={styles.GooglePlacesContainer}>
        <GooglePlacesAutocomplete
          ref={googleAutocompletRef}
          renderLeftButton={() => (
            <View style={styles.LefButtonContainer}>
              <Icon name="search" style={styles.leftButtonIcon}></Icon>
            </View>
          )}
          renderRightButton={() => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                if (googleAutocompletRef && googleAutocompletRef.current) {
                  googleAutocompletRef.current.clear();
                }
                setZomm(6);
                dispatch(getSelectedCityAction([]));
                dispatch(getSelectedBlockAction([]));
                dispatch(getSelectedNeighborhoodAction([]));
              }}>
              <View style={styles.rightButtonContainer}>
                <Icon
                  name="close-circle-outline"
                  style={styles.rightButtonIcon}
                />
              </View>
            </TouchableOpacity>
          )}
          placeholder="Search"
          styles={{
            container: styles.googleAutocompletContainer,
            textInputContainer: styles.googleAutocompletInputContainer,
            textInput: styles.googleAutocompletInput,
            listView: styles.googleAutocompleteListView,
            row: {},
          }}
          fetchDetails={true}
          onPress={(data, details) => {
            console.log(details.geometry.location);
            if (cityLocation?.length === 0) {
              dispatch(
                getSelectedCityAction([
                  details?.geometry?.location?.lat,
                  details?.geometry?.location?.lng,
                ]),
              );
              setZomm(prevState => prevState + 6);
            } else if (blockLocation?.length === 0) {
              dispatch(
                getSelectedBlockAction([
                  details?.geometry?.location?.lat,
                  details?.geometry?.location?.lng,
                ]),
              );
              setZomm(prevState => prevState + 6);
            } else {
              dispatch(
                getSelectedNeighborhoodAction([
                  details?.geometry?.location?.lat,
                  details?.geometry?.location?.lng,
                ]),
              );
              setZomm(prevState => prevState + 6);
            }

            setCurrentLocation({
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
            });
          }}
          query={{
            key: 'AIzaSyAb_AdNmuBqPDLbT-UPQy-qIGfH9G1C_JE',
            language: 'en',
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  LefButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    // backgroundColor: 'yellow',
  },
  GooglePlacesContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    paddingBottom: 50,
    paddingTop: 0,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftButtonIcon: {fontSize: 25, color: '#28B873'},
  rightButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingRight: 5,
  },
  rightButtonIcon: {fontSize: 25, color: '#28B873'},
  googleAutocompletContainer: {
    backgroundColor: 'transparent',
  },
  googleAutocompletInputContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 45,
  },
  googleAutocompletInput: {
    color: 'black',
    backgroundColor: 'transparent',
    borderRadius: 50,
    fontSize: 14,
  },
  googleAutocompleteListView: {
    backgroundColor: 'transparent',
    paddingTop: 8,
    borderRadius: 5,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: 'white',
  },
});

export interface IMapViewScreenProps {}

export default MapViewScreen;
