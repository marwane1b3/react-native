import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../utils/theme';

interface Props {
  title: string;
  subtitle?: string;
  customStyles?: object;
}

const Box = (props: Props) => {
  return (
    <View style={styles.boxStyles}>
      <View style={styles.IconStyles} />
      <View>
        <Text
          style={
            props.customStyles ? props.customStyles : styles.boxTitleStyles
          }>
          {props.title}
        </Text>
        {props.subtitle?.length > 0 && (
          <Text style={styles.boxSubtitleStyles}>{props?.subtitle}</Text>
        )}
      </View>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  boxStyles: {
    flexDirection: 'row',
    padding: 10,
  },
  boxTitleStyles: {
    fontWeight: 'bold',
    fontSize: 21,
    marginLeft: 15,
  },
  boxSubtitleStyles: {
    // fontWeight: 'normal',
    marginLeft: 15,
    fontSize: 16,
    color: theme.palette.default.gray,
  },
  IconStyles: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
  },
});
