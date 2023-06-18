import React from 'react';
import {Box, Flex, Heading, IBoxProps, Text, View} from 'native-base';
import {IProduct} from 'src/tyopescript/interfaces/product.interface';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import AntIcons from 'src/base/icons/ant-icons';
import {colors} from 'src/theme/global/colors';

export interface ProductProps extends IBoxProps {
  product: IProduct;
  onRemove?: () => void;
}

const Product: React.FC<ProductProps> = ({
  width = 141,
  onRemove,
  product: {discount, images, name, price},
  ...rest
}) => {
  return (
    <Box
      p="4"
      width={width}
      borderRadius="5px"
      borderWidth="1px"
      borderColor="neutralLight.400"
      {...rest}>
      <View w="full" height={(width as number) - 32}>
        <Image source={images[0] as any} style={styles.image} />
      </View>
      <Heading
        size="sm"
        mt="3"
        isTruncated
        fontWeight={700}
        color="neutralDark.400">
        {name.toUpperCase()}
      </Heading>
      <Text size="sm" mt="1.5" fontWeight={600} color="primary.400">
        {`$${((price * discount) / 100).toFixed(2)}`}
      </Text>
      <Flex
        mt="2"
        w="full"
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between">
        <Flex direction="row" alignItems="center">
          <Flex position="relative" alignItems="center">
            <View
              top="45%"
              width="full"
              height="1px"
              position="absolute"
              bgColor="neutralGray.300"
            />
            <Text size="xs" fontWeight={400} color="neutralGray.400">
              {`$${price}`}
            </Text>
          </Flex>
          <Text size="xs" ml="2" fontWeight={700} color="secondary.400">
            {`${discount}% off`}
          </Text>
        </Flex>
        {onRemove && (
          <Flex
            direction="row"
            alignItems="flex-end"
            justifyContent="space-between">
            <TouchableOpacity>
              <AntIcons
                name="delete"
                size={18}
                color={colors.neutralGray['400']}
              />
            </TouchableOpacity>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Product;
