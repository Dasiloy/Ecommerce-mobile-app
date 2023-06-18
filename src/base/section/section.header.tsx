import React from 'react';
import {Box, IBoxProps} from 'native-base';

export interface SectionHeaderrProps extends IBoxProps {
  children: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderrProps> = ({
  children,
  px = '3',
  mb = '3',
  ...rest
}) => {
  return (
    <Box
      w="full"
      px={px}
      mb={mb}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      display="flex"
      {...rest}>
      {children}
    </Box>
  );
};

export default SectionHeader;
