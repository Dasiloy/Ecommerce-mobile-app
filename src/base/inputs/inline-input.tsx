import React from 'react';
import {Button, IInputProps, Input} from 'native-base';

export interface InlineInputProps extends IInputProps {
  buttonText?: string;
}

const InlineInput: React.FC<InlineInputProps> = ({
  buttonText = 'Apply',
  placeholder = 'Enter Cupoun Code',
  ...rest
}) => {
  return (
    <Input
      type="text"
      InputRightElement={
        <Button size="md" rounded="none" w="25%" h="full">
          {buttonText}
        </Button>
      }
      {...rest}
      placeholder={placeholder}
    />
  );
};

export default InlineInput;
