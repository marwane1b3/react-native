/**
 *
 * TaxiDetailsContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useInjectReducer} from 'redux-injectors';
import makeSelectTaxiDetailsContainer from './selectors';
import reducer from './reducer';
import Box from './Box';
import theme from '../../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const stateSelector = createStructuredSelector({
  taxiDetailsContainer: makeSelectTaxiDetailsContainer(),
});

const key = 'taxiDetailsContainer';
export interface Props {
  onSubmit: Function;
}
function TaxiDetailsContainer(props: Props) {
  useInjectReducer({key, reducer});

  /* eslint-disable no-unused-vars */
  const {taxiDetailsContainer} = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  const custom = {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
  };
  const uri =
    'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png';
  return (
    <View
      style={
        {
          // backgroundColor: 'red',
        }
      }>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Box title={'2 seats left'} subtitle={'3 Total'} />
        <Box title={'Volvo gray'} subtitle={'gray'} />
      </View>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Box title={'Small bag'} />
        <Box title={'Flixible time'} customStyles={custom} />
      </View>
      <View
        style={{
          height: 100,

          marginTop: 10,
          borderWidth: 4,
          width: theme.dimensions.width,
          borderColor: '#F3F3F3',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomColor: '#F3F3F3',
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}>
        <View>
          <Text style={styles.priceTextStyles}>
            Total price for 1 passenger
          </Text>
          <Text style={styles.priceStyles}>40 DH </Text>
        </View>
        <AntDesign
          name={'right'}
          size={20}
          color={theme.palette.default.dark}
        />
      </View>
      <View
        style={{
          // marginTop: 10,
          backgroundColor: '#F3F3F3',
          width: '100%',
          height: 10,
        }}
      />

      <View
        style={{
          //  marginTop: 10,

          borderWidth: 4,
          width: theme.dimensions.width,
          borderColor: '#F3F3F3',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomColor: '#F3F3F3',
          borderLeftWidth: 0,
          borderRightWidth: 0,
          height: 100,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: uri}} style={styles.avatarImageStyles} />

          <View>
            <Text style={styles.priceText2Styles}>Samir</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 5,
              }}>
              <Entypo name={'star'} color={'yellow'} size={15} />
              <Text style={styles.price2Styles}>5/5 -18 avis </Text>
            </View>
          </View>
        </View>
        <AntDesign
          name={'right'}
          size={20}
          color={theme.palette.default.dark}
        />
      </View>
      <View
        style={{
          // marginTop: 10,
          backgroundColor: '#F3F3F3',
          width: '100%',
          height: 10,
        }}
      />
      <Text style={{fontSize: 24, fontWeight: '800', marginLeft: 15}}>
        Also taking this ride
      </Text>
      <View
        style={{
          //  marginTop: 10,

          //   borderWidth: 4,
          width: theme.dimensions.width,
          borderColor: '#F3F3F3',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomColor: '#F3F3F3',
          borderLeftWidth: 0,
          borderRightWidth: 0,
          height: 100,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: uri}} style={styles.avatarImageStyles} />

          <View>
            <Text style={styles.priceText2Styles}>Hicham</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 5,
              }}>
              <Entypo name={'star'} color={'yellow'} size={15} />
              <Text style={styles.price2Styles}>4/5 -18 avis </Text>
            </View>
          </View>
        </View>
        <AntDesign
          name={'right'}
          size={20}
          color={theme.palette.default.dark}
        />
      </View>
      <View
        style={{
          // marginTop: 10,
          backgroundColor: '#F3F3F3',
          width: '100%',
          height: 3,
          marginVertical: 10,
        }}
      />
      <View
        style={{
          //justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <TouchableOpacity
          onPress={() => props.onSubmit()}
          style={{
            width: 215,
            height: 49,
            backgroundColor: '#12AC8F',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Reserve
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  priceTextStyles: {
    fontSize: 20,
    color: theme.palette.default.gray,
    margin: 10,
  },
  priceStyles: {
    fontSize: 20,
    //color: theme.palette.default.gray,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  priceText2Styles: {
    fontSize: 20,
    color: theme.palette.default.dark,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  avatarImageStyles: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 15,
  },
  price2Styles: {
    fontSize: 20,
    color: theme.palette.default.gray,
    marginHorizontal: 10,
    //fontWeight: 'bold',
  },
});
export default TaxiDetailsContainer;
