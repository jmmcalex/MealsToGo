import { DefaultTheme } from 'styled-components/native';
import { colors } from './colors';
import { fonts, fontSizes, fontWeights } from './fonts';
import { sizes } from './sizes';
import { lineHeights, space } from './spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    space: typeof space;
    lineHeights: typeof lineHeights;
    sizes: typeof sizes;
    fonts: typeof fonts;
    fontWeights: typeof fontWeights;
    fontSizes: typeof fontSizes;
  }
}

export const theme: DefaultTheme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
