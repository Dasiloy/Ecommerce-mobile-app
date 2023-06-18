import React from 'react';
import {Box, IBoxProps} from 'native-base';

interface HDividerProps extends IBoxProps {}
const HDivider: React.FC<HDividerProps> = props => {
  return <Box w="full" h="1px" bgColor="neutralLight.400" {...props} />;
};

export default HDivider;
