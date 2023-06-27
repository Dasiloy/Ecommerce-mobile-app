import React from 'react';
import {IPressableProps, Pressable} from 'native-base';
import IonicIcons from '../ionic-icon';
import {colors} from 'src/theme/global/colors';

export interface AddNewIconProps extends IPressableProps {
  size?: number;
}

function AddNewIcon({size = 24, ...rest}: AddNewIconProps) {
  return (
    <Pressable
      w="8"
      h="6"
      display="flex"
      alignItems="center"
      flexDirection="row"
      onPress={() => {}}
      justifyContent="center"
      {...rest}>
      <IonicIcons size={size} name="add" color={colors.primary['400']} />
    </Pressable>
  );
}

export default AddNewIcon;
