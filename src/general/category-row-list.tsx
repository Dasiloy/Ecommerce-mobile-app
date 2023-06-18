import React from 'react';
import Category from './category';
import {FlatList} from 'native-base';
import {AppRepository} from 'src/tyopescript/classes/app.class';

const app = AppRepository.getInstance();
const CategoryRowList = () => {
  return (
    <FlatList
      horizontal
      data={app.categories}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Category {...item} onPress={() => {}} />}
    />
  );
};

export default CategoryRowList;
