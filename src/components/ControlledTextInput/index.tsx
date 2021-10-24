/**
 *
 * ControlledTextInput
 *
 */

import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Control, Controller, FieldValues, SetFieldValue} from 'react-hook-form';
import theme from '../../utils/theme';

const ControlledTextInput: React.FC<IControlledTextInputProps> = props => {
  const {
    control,
    errorMessage,
    name,
    label,
    defaultValue,
    staticHolder,
    inputStyle,
    showLabel,
    placeHolder = '',
    alwaysFocused = false,
    ...inputProps
  } = props;

  const textIn = useRef(null); //declare ref
  useEffect(() => {
    if (alwaysFocused) {
      (
        textIn.current || {setNativeProps: (selection: any) => {}}
      ).setNativeProps({
        selection: {start: 0, end: 0},
      });
    }
  });

  return (
    <>
      <View style={styles.Container}>
        {showLabel && <Text style={styles.title}>{label} :</Text>}
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              ref={textIn}
              {...inputProps}
              // placeholder={placeHolder}
              // placeholderTextColor={'grey'}
              style={[styles.input, inputStyle || {}]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              // placeholderTextColor={theme.palette.default.light}
              placeholder={staticHolder}
            />
          )}
        />
      </View>
      {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: theme.dimensions.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    // backgroundColor: 'red',
    paddingHorizontal: 15,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    width: '60%',
    borderColor: theme.palette.default.light,
    color: theme.palette.default.light,
    fontSize: theme.fontSizing.default[2],
    letterSpacing: 0.3,
  },
  title: {
    alignSelf: 'flex-start',
    paddingVertical: 15,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: theme.palette.default.light,
  },
  error: {
    alignSelf: 'flex-start',
    marginVertical: 4,
    color: 'red',
    textAlign: 'center',
    marginHorizontal: 35,
  },
});

export interface IControlledTextInputProps extends TextInputProps {
  control: Control<FieldValues> | undefined;
  errorMessage: string;
  name: string;
  label: string;
  staticHolder: string;
  showLabel?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  placeHolder?: string;
  alwaysFocused?: boolean;
}
export default ControlledTextInput;
