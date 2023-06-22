import React from 'react';
import Section from 'src/base/section';
import {ScrollView} from 'native-base';
import ScreenLayout from 'src/layout/screen';
import HDivider from 'src/base/divider/h-divider';
import PageNavigator from 'src/general/page-navigator';
import {AppRepository} from 'src/tyopescript/classes/app.class';

const app = AppRepository.getInstance();

const CartScreen = () => {
  return (
    <ScreenLayout>
      <PageNavigator text="Your Cart" />
      <HDivider />
      <ScrollView>
        <Section>
          <Section.Body allowPaddingRight>
            {/* Cart List */}

            {/* shopping cart calculation here */}
          </Section.Body>
        </Section>
      </ScrollView>
    </ScreenLayout>
  );
};

export default CartScreen;
