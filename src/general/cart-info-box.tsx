import React from 'react';
import {HStack, Text, VStack} from 'native-base';
import HDivider from 'src/base/divider/h-divider';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';

export interface CartInfoProps extends IHStackProps {
  // some props will come here
}

const CartInfoBox: React.FC<CartInfoProps> = ({...rest}) => {
  return (
    <VStack
      p={4}
      mt="4"
      space={3}
      borderWidth="1px"
      borderRadius="5px"
      borderColor="neutralLight.400"
      {...rest}>
      {/* line item */}
      <HStack justifyContent="space-between" py="2px" alignItems="center">
        <Text size="sm" color="neutralGray.400">
          Items (3)
        </Text>
        <Text size="sm" color="neutralDark.400">
          $598.86
        </Text>
      </HStack>
      {/* line item */}
      <HStack justifyContent="space-between" py="2px" alignItems="center">
        <Text size="sm" color="neutralGray.400">
          shipping
        </Text>
        <Text size="sm" color="neutralDark.400">
          $40.00
        </Text>
      </HStack>
      {/* line item */}
      <HStack justifyContent="space-between" py="2px" alignItems="center">
        <Text size="sm" color="neutralGray.400">
          Import charges
        </Text>
        <Text size="sm" color="neutralDark.400">
          $120.00
        </Text>
      </HStack>
      {/* Divider */}
      <HDivider
        bgColor="white"
        borderWidth="1px"
        borderStyle="dashed"
        borderColor="neutralLight.400"
      />
      {/* line item */}
      <HStack justifyContent="space-between" py="2px" alignItems="center">
        <Text size="sm" color="neutralDark.400" fontWeight={600}>
          Total Price
        </Text>
        <Text size="sm" color="primary.400" fontWeight={700}>
          $766.86
        </Text>
      </HStack>
    </VStack>
  );
};

export default CartInfoBox;
