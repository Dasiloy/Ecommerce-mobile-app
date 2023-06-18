import React from 'react';
import {Text, ITextProps} from 'native-base';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export interface SectionLinkProps extends Omit<ITextProps, 'children'> {
  text: string;
  onPress?: TouchableOpacityProps['onPress'];
}

const SectionLink: React.FC<SectionLinkProps> = ({text, onPress, ...rest}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text size="sm" mb="0" color="primary.400" fontWeight={700} {...rest}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SectionLink;
