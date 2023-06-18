import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import IonicIcons from 'src/base/icons/ionic-icon';
import {colors} from 'src/theme/global/colors';

const ProductSearchIcon = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props}>
      <IonicIcons
        size={24}
        name="ios-search-outline"
        color={colors.neutralGray['400']}
      />
    </TouchableOpacity>
  );
};

export default ProductSearchIcon;
