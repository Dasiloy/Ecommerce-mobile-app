import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';

interface BadgeProps extends Omit<IViewProps, 'position'> {
  placement?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
}
const Badge: React.FC<BadgeProps> = ({
  bg = 'secondary.500',
  placement = 'top-right',
  ...rest
}) => {
  return (
    <View
      {...rest}
      bg={bg}
      width="2"
      height="2"
      borderRadius="full"
      style={styles[placement]}
    />
  );
};

const styles = StyleSheet.create({
  'top-right': {
    position: 'absolute',
    zIndex: 2,
    top: 1,
    right: 2.5,
  },
  'top-left': {
    position: 'absolute',
    zIndex: 2,
    top: 1,
    left: 2.5,
  },
  'bottom-right': {
    position: 'absolute',
    zIndex: 2,
    bottom: 1,
    right: 2.5,
  },
  'bottom-left': {
    position: 'absolute',
    zIndex: 2,
    bottom: 1,
    left: 2.5,
  },
});

export default Badge;
