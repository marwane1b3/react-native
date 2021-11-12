import {Dimensions} from 'react-native';

export interface DeviceDimensions {
  width: number;
  height: number;
}
export interface ApplicationTheme {
  spacing: Sizing;
  fontSizing: Sizing;
  palette: Palette;
  dimensions: DeviceDimensions;
}
export interface Coloring {
  light: string;
  dark: string;
  green: string;
  red: string;
  gray: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface Palette {
  default: Coloring;
}

export interface Sizing {
  default: Array<number>;
}

const palette: Palette = {
  default: {
    light: '#FFFFFF',
    dark: '#131315',
    gray: '#b1b5b1',

    red: '#FF3636',
    green: '#CDCDCD',
  },
};

const spacing: Sizing = {
  default: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768],
};

const fontSizing: Sizing = {
  default: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
};

export const dimensions: DeviceDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const theme: ApplicationTheme = {
  spacing,
  fontSizing,
  dimensions,
  palette,
};

export default theme;
