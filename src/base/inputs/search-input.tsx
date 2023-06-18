import React from 'react';
import IonicIcons from '../icons/ionic-icon';
import {IInputProps, Icon, Input} from 'native-base';

const SearchInput = ({
  isInvalid,
  onBlur,
  onFocus,
  placeholder = 'Enter your email address',
  ...rest
}: IInputProps) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <Input
      py="10px"
      type="text"
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      onFocus={e => {
        setFocused(true);
        onFocus?.(e);
      }}
      onBlur={e => {
        setFocused(false);
        onBlur?.(e);
      }}
      InputLeftElement={
        <Icon
          as={<IonicIcons name="search-outline" />}
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
export default SearchInput;
