import React from 'react';
import IonicIcons from '../icons/ionic-icon';
import {IInputProps, Icon, Input} from 'native-base';

const NameInput = ({
  isInvalid,
  placeholder = 'Enter your name',
  ...rest
}: IInputProps) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <Input
      mb="3"
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      InputLeftElement={
        <Icon
          as={<IonicIcons name="person-outline" />}
          size={5}
          ml="2"
          color={
            isInvalid ? 'red.400' : focused ? 'primary.400' : 'neutralGray.400'
          }
        />
      }
      {...rest}
    />
  );
};
export default NameInput;
