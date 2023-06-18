import React from 'react';
import {Screens} from 'src/routing/screens';
import {useRoute} from '@react-navigation/native';
import {Banner1} from 'src/theme/asset';
import ScreenLayout from 'src/layout/screen';
import HDivider from 'src/base/divider/h-divider';
import Section from 'src/base/section/index';
import ProductList from 'src/general/product-list';
import BackgroundImage from 'src/base/background-image';
import {ScrollView} from 'native-base';
import {AppRepository} from 'src/tyopescript/classes/app.class';
import PageNavigator from 'src/general/page-navigator';
import ProductSearchIcon from '../general/search-product-icon';

const app = AppRepository.getInstance();

const HomeOfferScreen = ({navigation}: any) => {
  const {
    params: {offer},
  } = useRoute<any>();

  return (
    <ScreenLayout>
      <PageNavigator
        text={offer}
        onBack={() => navigation.navigate(Screens.HOME)}>
        <ProductSearchIcon />
      </PageNavigator>
      <HDivider />
      <ScrollView>
        {/* Carousel Section  */}
        <Section>
          <Section.Body allowPaddingRight>
            <BackgroundImage source={Banner1} />
          </Section.Body>
        </Section>
        <Section>
          <Section.Body allowPaddingRight>
            <ProductList products={app.products} />
          </Section.Body>
        </Section>
      </ScrollView>
    </ScreenLayout>
  );
};

export default HomeOfferScreen;
