import React from 'react';
import {Box, Heading, IHeadingProps} from 'native-base';

export interface SectionTitleProps extends IHeadingProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({children, ...rest}) => {
  if (typeof children === 'string') {
    return (
      <Heading
        size="sm"
        mb="0"
        color="neutralDark.400"
        fontWeight={600}
        {...rest}>
        {children}
      </Heading>
    );
  }

  return <Box>{children}</Box>;
};

export default SectionTitle;
