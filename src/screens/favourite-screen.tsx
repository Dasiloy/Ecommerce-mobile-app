import React from 'react';
import {Screens} from 'src/routing/screens';
import ScreenLayout from 'src/layout/screen';
import HDivider from 'src/base/divider/h-divider';
import Section from 'src/base/section/index';
import ProductList from 'src/general/product-list';
import {ScrollView} from 'native-base';
import {AppRepository} from 'src/tyopescript/classes/app.class';
import PageNavigator from 'src/general/page-navigator';

const app = AppRepository.getInstance();

const FavouriteScreen = ({navigation}: any) => {
  return (
    <ScreenLayout>
      <PageNavigator
        text="Favorite Product"
        onBack={() => navigation.navigate(Screens.HOME)}
      />
      <HDivider />
      <ScrollView>
        <Section>
          <Section.Body allowPaddingRight>
            <ProductList
              products={[...app.products].slice(0, 4)}
              onRemove={() => {}}
            />
          </Section.Body>
        </Section>
      </ScrollView>
    </ScreenLayout>
  );
};

export default FavouriteScreen;
