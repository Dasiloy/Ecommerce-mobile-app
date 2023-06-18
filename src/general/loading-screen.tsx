import React from 'react';
import {Box} from 'native-base';
import {ActivityIndicator, Dimensions} from 'react-native';
import {colors} from 'src/theme/global/colors';

const {height, width} = Dimensions.get('window');
const Loadingscreen = () => {
  return (
    <Box
      bg="white"
      height={height}
      width={width}
      flex="1"
      justifyContent="center"
      alignItems="center">
      <ActivityIndicator color={colors.primary['400']} size="large" />
    </Box>
  );
};

export default Loadingscreen;
