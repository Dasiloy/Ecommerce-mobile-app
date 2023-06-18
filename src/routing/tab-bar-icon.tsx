import React from 'react';
import {colors} from 'src/theme/global/colors';
import IonicIcons from 'src/base/icons/ionic-icon';
import AntIcons from 'src/base/icons/ant-icons';

const TabBarIcon = ({name, focused}: any) => {
  if (name === 'tago') {
    return (
      <AntIcons
        size={25}
        name={name}
        color={focused ? colors.primary['400'] : colors.neutralGray['400']}
      />
    );
  }

  return (
    <IonicIcons
      size={25}
      name={name}
      color={focused ? colors.primary['400'] : colors.neutralGray['400']}
    />
  );
};

export default TabBarIcon;
