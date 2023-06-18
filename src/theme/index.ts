import {extendTheme} from 'native-base';
import {sizes} from './global/sizes';
import {colors} from './global/colors';
import {opacity} from './global/opacity';
import {shadows} from './global/shadows';
import {fontSizes} from './global/fonts.sizes';
import {fontWeights} from './global/font.weights';
import {lineHeights} from './global/line.heights';
import {letterSpacings} from './global/letter.spacing';
import {fontConfig, fonts} from './global/fonts-config';

// componenets ovverride here
import {Text} from './components/text';
import {Input} from './components/input';
import {Button} from './components/button';
import {Heading} from './components/heading';
import {TextArea} from './components/textarea';

const theme = extendTheme({
  sizes,
  fonts,
  colors,
  shadows,
  opacity,
  fontConfig,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  components: {
    Text,
    Input,
    Button,
    Heading,
    TextArea,
  },
});

// get type of custom tehme
export type CustomThemeType = typeof theme;
// declare a new module for native-base to pick custom theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme;
