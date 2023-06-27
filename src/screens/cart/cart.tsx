import React from 'react';
import Section from 'src/base/section';
import {Button, ScrollView} from 'native-base';
import CartItem from 'src/general/cart-item';
import ScreenLayout from 'src/layout/screen';
import HDivider from 'src/base/divider/h-divider';
import CartInfoBox from 'src/general/cart-info-box';
import InlineInput from 'src/base/inputs/inline-input';
import PageNavigator from 'src/general/page-navigator';
import {AppRepository} from 'src/tyopescript/classes/app.class';
import {Screens} from 'src/routing/screens';

const app = AppRepository.getInstance();

const CartScreen = ({navigation}: any) => {
  return (
    <ScreenLayout>
      <PageNavigator text="Your Cart" />
      <HDivider />
      <ScrollView>
        <Section pb="4">
          <Section.Body allowPaddingRight>
            {/* Cart List */}
            {app.products.slice(0, 3).map(p => (
              <CartItem product={p} key={p._id} />
            ))}
            <InlineInput mt="4" />
            {/* shopping cart calculation here */}
            <CartInfoBox />
            <Button
              onPress={() => navigation.navigate(Screens.CART_SHIPPING_LIST)}
              mt="4">
              Check Out
            </Button>
          </Section.Body>
        </Section>
      </ScrollView>
    </ScreenLayout>
  );
};

export default CartScreen;
