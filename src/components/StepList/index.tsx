/**
 *
 * Steps
 *
 */

import React, {memo} from 'react';
import {View} from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import ItemDetail from '../ItemDetail';

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#33cc33',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#33cc33',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#33cc33',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#33cc33',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#33cc33',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#000000',

  labelSize: 12,
  currentStepLabelColor: '#33cc33',
};
export const StepList: React.NamedExoticComponent<IStepListProps> = memo(
  ({step}) => {
    return (
      <>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={step}
          stepCount={3}
          direction={'vertical'}
        />
      </>
    );
  },
);

export interface IStepListProps {
  step?: number;
}
export default StepList;
