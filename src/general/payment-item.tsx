import React from 'react';
import {HStack, Pressable, Text} from 'native-base';
import AppImage from 'src/base/image';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';

export interface PaymentItemProps extends IHStackProps {
  title: string;
  image: string;
  onPress?: () => void;
}

const PaymentItem: React.FC<PaymentItemProps> = ({title, image, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <HStack space={4} py="4" alignItems="center">
        <AppImage src={image} width={6} height={6} />
        <Text color="neutralDark.400" fontWeight={700} size="sm">
          {title}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default PaymentItem;
