import React from 'react';
import Product, {ProductProps} from './product';
import {FlatList} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {IProduct} from 'src/tyopescript/interfaces/product.interface';

const {width} = Dimensions.get('window');
export interface ProductListProps {
  products: IProduct[];
  onRemove?: ProductProps['onRemove'];
}

const ProductList: React.FC<ProductListProps> = ({products, onRemove}) => {
  return (
    <FlatList
      numColumns={2}
      data={products}
      scrollEnabled={false}
      keyExtractor={i => i._id}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.grid}
      renderItem={({item}) => (
        <Product
          product={item}
          width={width / 2 - 20}
          mb="3"
          onRemove={onRemove}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  grid: {justifyContent: 'space-between'},
});

export default ProductList;
