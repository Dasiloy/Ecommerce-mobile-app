import React from 'react';
import {HStack} from 'native-base';
import AppImage from 'src/base/image';
import {IProduct} from 'src/tyopescript/interfaces/product.interface';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';

export interface CartItemProps extends IHStackProps {
  product: IProduct;
  onRemove?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({product, onRemove}) => {
  return (
    <HStack
      p={4}
      space={3}
      borderWidth="1px"
      borderRadius="5px"
      borderColor="neutralGray.400">
      <AppImage src={product.images[0]} width="72px" height="72px" />
    </HStack>
  );
};

export default CartItem;
