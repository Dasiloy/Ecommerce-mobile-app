import React from 'react';
import {Box, IBoxProps} from 'native-base';

export interface SectionBodyProps extends IBoxProps {
  allowPaddingRight?: boolean;
}

const SectionBody: React.FC<SectionBodyProps> = ({
  allowPaddingRight = false,
  children,
  ...rest
}) => {
  return (
    <Box px={3} pr={allowPaddingRight ? 3 : 0} {...rest}>
      {children}
    </Box>
  );
};

export default SectionBody;
