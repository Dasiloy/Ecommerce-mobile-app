import React from 'react';
import Slider from 'src/base/slider';
import {Banner1, Banner2, bg1} from 'src/theme/asset';

import ScreenLayout from 'src/layout/screen';
import SearchGroup from 'src/general/search-group';
import HDivider from 'src/base/divider/h-divider';
import Section from 'src/base/section/index';
import {Screens} from 'src/routing/screens';
import {Dimensions} from 'react-native';
import ProductList from 'src/general/product-list';
import BackgroundImage from 'src/base/background-image';
import CategoryRowList from 'src/general/category-row-list';
import ProductRowList from 'src/general/product-row-list';
import {Heading, ScrollView, Text, VStack} from 'native-base';
import {AppRepository} from 'src/tyopescript/classes/app.class';

const {width} = Dimensions.get('window');
const app = AppRepository.getInstance();

const HomeScreen = ({navigation}: any) => {
  return (
    <ScreenLayout>
      <SearchGroup />
      <HDivider mt="4" />
      <ScrollView>
        {/* Carousel Section  */}
        <Section pt="4">
          <Section.Body allowPaddingRight>
            <Slider data={[Banner1, Banner2]} />
          </Section.Body>
        </Section>
        {/*  Category section*/}
        <Section>
          <Section.Header>
            <Section.Title>Category</Section.Title>
            <Section.Link text="More Category" />
          </Section.Header>
          <Section.Body>
            <CategoryRowList />
          </Section.Body>
        </Section>
        {/* Flash Sales section */}
        <Section>
          <Section.Header>
            <Section.Title>Flash Sale</Section.Title>
            <Section.Link
              text="See More"
              onPress={() =>
                navigation.navigate(Screens.HOME_OFFER, {
                  offer: 'Super Flash Sale',
                })
              }
            />
          </Section.Header>
          <Section.Body>
            <ProductRowList products={app.products} />
          </Section.Body>
        </Section>
        {/* Mega Sales section */}
        <Section>
          <Section.Header>
            <Section.Title>Mega Sale</Section.Title>
            <Section.Link
              text="See More"
              onPress={() =>
                navigation.navigate(Screens.HOME_OFFER, {
                  offer: 'Super Mega Sale',
                })
              }
            />
          </Section.Header>
          <Section.Body>
            <ProductRowList products={app.products} />
          </Section.Body>
        </Section>
        {/* Recomended products section */}
        <Section>
          <Section.Body allowPaddingRight>
            <BackgroundImage source={bg1}>
              <VStack
                space="4"
                h="full"
                pl="6"
                width={width / 1.5}
                justifyContent="center"
                alignItems="flex-start">
                <Heading color="white" size="xl" fontWeight={700}>
                  Recomended Product
                </Heading>
                <Text color="white" size="sm" fontWeight={400}>
                  We recommend the best for you
                </Text>
              </VStack>
            </BackgroundImage>
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

export default HomeScreen;
