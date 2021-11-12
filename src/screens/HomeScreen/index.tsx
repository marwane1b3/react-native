import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ItemDetail from '../../components/ItemDetail';
import theme from '../../utils/theme';
import StpeList from '../../components/StepList';
import TaxiDetailsContainer from '../../containers/TaxiDetailsContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-vector-icons/Entypo';
import {convertDateToEnglish} from '../../hooks/convertTime';
import {useNavigation} from '@react-navigation/core';
interface Props {}

const HomeScreen = (props: Props) => {
  const navigation = useNavigation();
  const reserveNavigation = () => {
    navigation.navigate('MapViewScreen');
  };
  return (
    <ScrollView contentContainerStyle={styles.containerStyles}>
      <View style={styles.headerContainerStyles}>
        <View style={styles.headerFirstRowStyles}>
          <View>
            <Icon name="arrow-back-outline" style={styles.goBackIconStyles} />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateStyles}>{convertDateToEnglish()}</Text>
          </View>
        </View>
        <View>
          <Share name="share" style={styles.shareIconStyles} />
        </View>
      </View>
      <View style={styles.ItemContainerStyles}>
        <View style={styles.stepIndicatorSpaceStyles}>
          <StpeList step={1} />
        </View>
        <View style={styles.itemSubContainerStyles}>
          <ItemDetail
            itemTitle={'Hamria'}
            subtitle
            itemSubtitle={'mekness'}
            iconName={'location-pin'}
            onPress={() => {
              console.log('plop');
            }}
            chevron
            iconName2={'clock'}
            iconSize2={14}
            time={'10:30'}
          />
          <View style={{marginTop: 15}} />
          <ItemDetail
            itemTitle={'Sidi maarouf'}
            subtitle
            itemSubtitle={'casablanca'}
            iconName={'location-pin'}
            onPress={() => {
              console.log('plop');
            }}
            chevron
            iconName2={'clock'}
            iconSize2={14}
            time={'10:30'}
          />

          <View style={{marginTop: 35}} />

          <Text
            style={{
              color: theme.palette.default.gray,
            }}>
            {'Marrackech'}
          </Text>
        </View>
      </View>

      <TaxiDetailsContainer onSubmit={reserveNavigation} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerStyles: {
    flexGrow: 1,
    backgroundColor: theme.palette.default.light,
  },
  headerContainerStyles: {
    flexDirection: 'row',
    width: '100%',

    justifyContent: 'space-around',
    height: 100,
    alignItems: 'center',
    paddingTop: 30,
  },
  headerFirstRowStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemContainerStyles: {
    flexDirection: 'row',
    marginRight: 25,
    marginTop: 5,
    // backgroundColor: 'green',
  },
  itemSubContainerStyles: {
    flex: 1,
    //  alignItems: 'center',
    paddingLeft: '3%',
  },
  stepIndicatorSpaceStyles: {
    // position: 'absolute',
    //  left: 25,
    alignItems: 'flex-end',
    height: theme.dimensions.height / 2 + 55,
    width: '20%',
    // backgroundColor: 'red',
  },
  goBackIconStyles: {
    fontSize: theme.fontSizing.default[6],
    // paddingTop: 7,
    paddingHorizontal: theme.spacing.default[0],
    color: theme.palette.default.dark,
    // paddingVertical: theme.spacing.default[4],
  },
  shareIconStyles: {
    fontSize: theme.fontSizing.default[6],
    // paddingTop: 7,
    paddingHorizontal: theme.spacing.default[4],
    color: theme.palette.default.dark,
  },
  dateStyles: {
    fontWeight: 'bold',
    fontSize: theme.fontSizing.default[3],
    // paddingRight: 155,
  },
  dateContainer: {
    paddingHorizontal: theme.spacing.default[5],
  },
});
