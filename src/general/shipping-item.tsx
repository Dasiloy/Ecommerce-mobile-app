import {Button, HStack, Pressable, Text, VStack} from 'native-base';
import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import React from 'react';
import AntIcons from 'src/base/icons/ant-icons';
import {colors} from 'src/theme/global/colors';
import {IShipping} from 'src/tyopescript/interfaces/shipping';

export interface ShiipingItemProps extends IVStackProps {
  shipping: IShipping;
}

const ShippingItem: React.FC<ShiipingItemProps> = ({shipping, ...rest}) => {
  const {
    first_name,
    last_name,
    street_address_1,
    street_address_2,
    phone_code,
    phone_number,
    country,
    city,
    state,
  } = shipping;
  return (
    <VStack
      p={6}
      mb={4}
      space={4}
      borderWidth="1px"
      borderRadius="5px"
      borderColor="neutralLight.400"
      {...rest}>
      <Text size="md" fontWeight={600} color="neutralDark.400">
        {`${first_name} ${last_name}`}
      </Text>
      <Text size="sm" fontWeight={400} color="neutralGray.400">
        {`${street_address_1} ${
          street_address_2 || ''
        }, ${city} ${state} ${country}`}
      </Text>
      <Text size="sm" fontWeight={400} color="neutralGray.400">
        {`${phone_code}- ${phone_number}`}
      </Text>

      <HStack space={6} alignItems="center">
        <Button px="5">Edit</Button>
        <Pressable>
          <AntIcons name="delete" size={24} color={colors.neutralGray['400']} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default ShippingItem;
