/**
 *
 * StoreDetail
 *
 */

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Icon, ListItem} from 'react-native-elements';
import theme from '../../utils/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export interface IItemDetailProps {
  onPress?: any;
  iconName: string;
  iconType?: string;
  iconColor?: string;
  iconSize?: number;
  itemTitle: string;
  itemSubtitle?: string;
  chevron?: boolean;
  subtitle?: boolean;
  iconName2?: string;
  iconSize2?: number;
  time?: string;
}

export const ItemDetail: React.FC<IItemDetailProps> = ({
  onPress,
  iconName,
  iconType,
  iconColor,
  iconSize,
  itemTitle,
  itemSubtitle,
  chevron,
  subtitle,
  iconName2,
  iconSize2,
  time,
}) => {
  return (
    <View style={styles.mainContainerStyles}>
      <ListItem onPress={onPress} bottomDivider>
        <Icon
          name={iconName}
          type={iconType}
          color={iconColor}
          size={iconSize}
          style={{paddingHorizontal: 10}}
        />
        <ListItem.Content>
          <ListItem.Title
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.titleStyles}>
            {itemTitle}
          </ListItem.Title>
          {subtitle && <ListItem.Subtitle>{itemSubtitle}</ListItem.Subtitle>}
        </ListItem.Content>
        {chevron && <ListItem.Chevron size={30} color="black" />}
      </ListItem>
      <ListItem>
        <View style={styles.clockRowStyle}>
          <FontAwesome5
            name={iconName2}
            size={iconSize2}
            style={{paddingHorizontal: 10}}
          />
          <Text style={styles.clockTextStyles}>{time}</Text>
        </View>
      </ListItem>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainerStyles: {
    width: '95%',
    elevation: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.palette.default.light,

    overflow: 'hidden',
  },
  titleStyles: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  clockRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockTextStyles: {
    color: theme.palette.default.green,
  },
});
export interface IItemDetailProps {}

export default ItemDetail;
