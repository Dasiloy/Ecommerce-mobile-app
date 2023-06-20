import React from 'react';
import {Text, View} from 'native-base';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';

export interface LabelProps extends IViewProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({children, ...rest}) => {
  return (
    <View
      height="5"
      width="5"
      display="flex"
      rounded="full"
      bg="secondary.400"
      alignItems="center"
      justifyContent="center"
      {...rest}>
      <Text mb="0" mt="0" color="white" fontWeight={700} size="xs">
        {children}
      </Text>
    </View>
  );
};

export default Label;
