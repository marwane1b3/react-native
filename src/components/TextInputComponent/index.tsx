/**
 *
 * TextInputComponent
 *
 */

import React, {memo, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const TextInputComponent: React.NamedExoticComponent<ITextInputComponentProps> =
  memo(({getVal}) => {
    const [initialVal, setInitialVal] = useState('');
    const handleChange = nextVal => {
      //  getVal(nextVal);
      setInitialVal(nextVal);
    };

    return <></>;
  });
const styles = StyleSheet.create({
  decoratedTextInputStyle: {
    borderWidth: 1,
    borderColor: theme.palette.default.main,
    width: '70%',
    height: 40,
    marginVertical: 11,
    borderRadius: 11,
  },
});
export interface ITextInputComponentProps {
  getVal: Function;
}
export default TextInputComponent;
