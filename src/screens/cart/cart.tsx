import React from 'react';
import Section from 'src/base/section';
import {Button, Input, ScrollView} from 'native-base';
import CartItem from 'src/general/cart-item';
import ScreenLayout from 'src/layout/screen';
import HDivider from 'src/base/divider/h-divider';
import PageNavigator from 'src/general/page-navigator';
import {AppRepository} from 'src/tyopescript/classes/app.class';
import CartInfoBox from 'src/general/cart-info-box';

const app = AppRepository.getInstance();

const CartScreen = () => {
  return (
    <ScreenLayout>
      <PageNavigator text="Your Cart" />
      <HDivider />
      <ScrollView>
        <Section pb="4">
          <Section.Body allowPaddingRight>
            {/* Cart List */}
            {app.products.slice(0, 5).map(p => (
              <CartItem product={p} key={p._id} />
            ))}
            <Input
              mt="4"
              type="text"
              InputRightElement={
                <Button size="md" rounded="none" w="25%" h="full">
                  Aplly
                </Button>
              }
              placeholder="Enter Cupon Code"
            />
            {/* shopping cart calculation here */}
            <CartInfoBox />
            <Button mt="4">Check Out</Button>
          </Section.Body>
        </Section>
      </ScrollView>
    </ScreenLayout>
  );
};

export default CartScreen;
