import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

export const iOSStyleStackNavigatorOptions: StackNavigationOptions = {
  gestureEnabled: false,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
