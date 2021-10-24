/**
 *
 * ToastComponent
 *
 */

import React from 'react';
import {View, Text} from 'react-native';

export const ToastComponent: React.FC<IToastComponentProps> = ({
  error,
  success,
}) => {
  return (
    <>
      {error?.length > 0 ? (
        <View
          style={{
            marginTop: 15,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 15,
            padding: 5,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {error}
          </Text>
        </View>
      ) : (
        <View
          style={{
            marginTop: 15,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 15,
            padding: 5,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              color: 'green',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {success}
          </Text>
        </View>
      )}
    </>
  );
};

export interface IToastComponentProps {
  error: string;
  success: string;
}
export default ToastComponent;
