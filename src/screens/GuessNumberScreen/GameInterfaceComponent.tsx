import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import theme from '../../utils/theme';
import {makeSelectGuessedNumber} from './selectors';

interface Props {
  initalVal: string;
  handleChange: Function;
  resetFunction: Function;
  confirmFunction: Function;
}
const stateSelector = createStructuredSelector({
  guessedNumber: makeSelectGuessedNumber,
});
const GameInterfaceComponent = (props: Props) => {
  const {guessedNumber} = useSelector(stateSelector);

  return (
    <View style={styles.InputContainerStyles}>
      <Text style={styles.globalTextFont}>choose a guess</Text>
      <TextInput
        value={props.initalVal}
        keyboardType={'numeric'}
        onChangeText={txt => props.handleChange(txt)}
        style={styles.decoratedTextInputStyle}
        textAlign={'center'}
      />
      <View style={styles.buttonControllerContainerStyle}>
        <TouchableOpacity
          style={styles.buttonControllerStyle}
          onPress={() => props.resetFunction()}>
          <Text style={styles.globalTextFont}>reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonControllerStyle}
          onPress={() => props.confirmFunction()}>
          <Text style={styles.globalTextFont}>confirm</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonControllerSubmitStyle}>
        <Text style={styles.buttonControllerSubmitTextStyle}>start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameInterfaceComponent;

const styles = StyleSheet.create({
  InputContainerStyles: {
    // flex: 1,
    //backgroundColor: 'red',
    width: 300,
    height: 250,
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',

    // borderColor: theme.palette.default.Encours,
    borderRadius: 15,
    marginTop: '10%',
    paddingTop: '4%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonControllerContainerStyle: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonControllerStyle: {
    //borderWidth: 1,
    // borderColor: theme.palette.default.main,
    borderRadius: 15,
    paddingHorizontal: 35,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  globalTextFont: {
    fontFamily: 'Roboto-LightItalic',
    fontSize: 18,
  },
  buttonControllerSubmitStyle: {
    borderWidth: 1,
    borderColor: theme.palette.default.main,
    borderRadius: 15,
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginTop: 30,
  },
  buttonControllerSubmitTextStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  gameLuncherStyles: {
    width: '80%',
    backgroundColor: theme.palette.default.main,
    borderColor: theme.palette.default.main,
    borderRadius: 15,
    paddingHorizontal: 35,
    paddingVertical: 10,

    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  gameLuncherTextStyles: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: theme.palette.default.light,
    letterSpacing: 1.1,
  },
  decoratedTextInputStyle: {
    borderWidth: 1,
    borderColor: theme.palette.default.main,
    width: '70%',
    height: 40,
    marginVertical: 11,
    borderRadius: 11,
  },
});
