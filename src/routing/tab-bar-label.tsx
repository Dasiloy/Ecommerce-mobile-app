import React from 'react';
import {Text} from 'native-base';

const TabBarLabel = (props: any) => {
  const {focused, color, children} = props;

  return (
    <Text size="xs" fontWeight={focused ? 700 : 400} color={color}>
      {children}
    </Text>
  );
};

export default TabBarLabel;
