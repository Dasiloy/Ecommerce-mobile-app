import React from 'react';
import Product from './product';
import {FlatList} from 'native-base';
import {IProduct} from 'src/tyopescript/interfaces/product.interface';

export interface ProductRowListProps {
  products: IProduct[];
}
const ProductRowList: React.FC<ProductRowListProps> = ({products}) => {
  return (
    <FlatList
      horizontal
      data={products}
      keyExtractor={i => i._id}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Product product={item} mr="4" />}
    />
  );
};

export default ProductRowList;
