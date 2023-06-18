import React from 'react';
import IonicIcons from '../icons/ionic-icon';
import {IInputProps, Icon, Input} from 'native-base';

const PasswordInput = ({
  isInvalid,
  placeholder = 'Enter your email password',
  ...rest
}: IInputProps) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <Input
      mb="3"
      type="password"
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      InputLeftElement={
        <Icon
          as={<IonicIcons name="ios-lock-closed-outline" />}
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
export default PasswordInput;
