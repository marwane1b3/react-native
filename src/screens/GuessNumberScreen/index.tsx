/**
 *
 * GuessNumberScreen
 *
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {guessNumberAction} from './actions';
import {useInjectReducer} from 'redux-injectors';
import makeSelectGuessNumberScreen, {
  makeSelectGuessedNumber,
} from './selectors';
import reducer from './reducer';
//import TextInputComponent from '../../components/TextInputComponent';
import theme from '../../utils/theme';
import GameInterfaceComponent from './GameInterfaceComponent';

const stateSelector = createStructuredSelector({
  guessedNumber: makeSelectGuessedNumber,
});

const key = 'guessNumberScreen';

export const GuessNumberScreen: React.FC<IGuessNumberScreenProps> = ({}) => {
  // Injectors
  useInjectReducer({key, reducer});
  // Decalarations *
  /* eslint-disable no-unused-vars */
  const {guessedNumber} = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  const [lunchGame, setLunchGame] = React.useState(false);
  const [initialVal, setInitialVal] = React.useState('');
  const initalOpacity = React.useRef(new Animated.Value(0)).current;
  // Functions
  const fadeEffectOnGameInterface = () => {
    Animated.timing(initalOpacity, {
      toValue: 1,
      duration: 450,
      useNativeDriver: true,
    }).start();
  };
  const fadeEffectOffGameInterface = () => {
    Animated.timing(initalOpacity, {
      toValue: 0,
      duration: 550,
      useNativeDriver: true,
    }).start();
  };
  const handleChange = nextVal => {
    setInitialVal(nextVal);
  };
  const resetFunction = () => {
    setInitialVal('');
    dispatch(guessNumberAction(0));
  };
  const confirmFunction = () => {
    if (initialVal.length === 0) {
    } else {
      dispatch(guessNumberAction(+initialVal.trim()));
    }
  };
  const lunchGameFunction = () => {
    setLunchGame(prevState => !prevState);
    setInitialVal('');
    dispatch(guessNumberAction(0));
  };

  // Local Components

  const StartGameInterface = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.gameLuncherStyles}
          onPress={lunchGameFunction}>
          <Text style={styles.gameLuncherTextStyles}>
            {lunchGame ? 'close' : 'start'} Interface
          </Text>
        </TouchableOpacity>
      </>
    );
  };
  React.useEffect(() => {
    if (lunchGame) {
      fadeEffectOnGameInterface();
    }
    return () => {
      fadeEffectOffGameInterface();
    };
  }, [initalOpacity, lunchGame]);
  return (
    <ImageBackground
      source={require('../../../assets/images/BackgroundImage.jpg')}
      style={styles.container}>
      <Animated.View style={{opacity: initalOpacity}}>
        <GameInterfaceComponent
          initalVal={initialVal}
          handleChange={handleChange}
          resetFunction={resetFunction}
          confirmFunction={confirmFunction}
        />
      </Animated.View>

      <StartGameInterface />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
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

export interface IGuessNumberScreenProps {}

export default GuessNumberScreen;
