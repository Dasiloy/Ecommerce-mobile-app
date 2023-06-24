import React from 'react';
import {Box, Flex, HStack, Pressable, Text, VStack} from 'native-base';
import AppImage from 'src/base/image';
import {IProduct} from 'src/tyopescript/interfaces/product.interface';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import IonicIcons from 'src/base/icons/ionic-icon';
import {colors} from 'src/theme/global/colors';
import AntIcons from 'src/base/icons/ant-icons';

export interface CartItemProps extends IHStackProps {
  product: IProduct;
  onRemove?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({product, onRemove, ...rest}) => {
  const {name, price} = product;

  // replace this with global redux action to add and remove product from favourites and counter
  const [favoured, setFavoured] = React.useState(true);
  const toggleFavoured = () => setFavoured(!favoured);

  const [count, setCount] = React.useState(1);
  const increament = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <HStack
      p={4}
      mb={4}
      space={3}
      borderWidth="1px"
      borderRadius="5px"
      borderColor="neutralLight.400"
      {...rest}>
      <AppImage src={product.images[0]} width="72px" height="72px" />
      <VStack flex="1" justifyContent="space-between">
        {/* product details */}
        <HStack space="3.5">
          <Box flex="1">
            <Text size="sm" fontWeight={600} color="neutralDark.400">
              {name}
            </Text>
          </Box>
          {/* product action buttons */}
          <HStack alignItems="" space={2} width={'20%'}>
            <Pressable onPress={toggleFavoured}>
              <IonicIcons
                size={20}
                name={favoured ? 'heart' : 'heart-outline'}
                color={
                  favoured ? colors.secondary['500'] : colors.neutralGray['400']
                }
              />
            </Pressable>
            <Pressable onPress={onRemove}>
              <AntIcons
                name="delete"
                size={20}
                color={colors.neutralGray['400']}
              />
            </Pressable>
          </HStack>
        </HStack>
        {/* product price */}
        <HStack justifyContent="space-between" alignItems="flex-end">
          <Text size="sm" fontWeight={600} color="primary.400">
            {`$${price}`}
          </Text>
          {/* Cart buttons */}
          <Flex
            borderWidth="1"
            borderRadius="sm"
            borderColor="neutralLight.400"
            direction="row">
            <Pressable
              w="8"
              h="6"
              display="flex"
              alignItems="center"
              flexDirection="row"
              onPress={increament}
              justifyContent="center">
              <IonicIcons
                size={16}
                name="add"
                color={colors.neutralGray['400']}
              />
            </Pressable>
            <Box
              w="10"
              h="6"
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="center"
              bg="neutralLight.400">
              <Text color="neutralDark.400" size="sm">
                {count}
              </Text>
            </Box>
            <Pressable
              w="8"
              h="6"
              display="flex"
              alignItems="center"
              flexDirection="row"
              onPress={decrement}
              justifyContent="center">
              <IonicIcons
                size={16}
                name="remove"
                color={colors.neutralGray['400']}
              />
            </Pressable>
          </Flex>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CartItem;
