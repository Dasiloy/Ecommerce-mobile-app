import React from 'react';
import {Box} from 'native-base';
import ScreenLayout from 'src/layout/screen';
import PageNavigator from 'src/general/page-navigator';
import HDivider from 'src/base/divider/h-divider';
import {FlatList} from 'native-base';
import PaymentItem from 'src/general/payment-item';
import {bank, card, paypal} from 'src/theme/asset';
import {Screens} from 'src/routing/screens';

export const paymentOptions = [
  {
    title: 'Credit or Debit Card',
    image: card,
  },
  {
    title: 'Paypal',
    image: paypal,
  },
  {
    title: 'Bank Transfer',
    image: bank,
  },
];

const CartPaymentList = ({navigation}: any) => {
  return (
    <ScreenLayout>
      <PageNavigator text="Payment" onBack={() => navigation.goBack()} />
      <HDivider />
      <Box px="4" pt="3">
        <FlatList
          data={paymentOptions}
          keyExtractor={({title}) => title}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <PaymentItem
              title={item.title}
              image={item.image}
              onPress={() => navigation.navigate(Screens.CART_CARD_LIST)}
            />
          )}
        />
      </Box>
    </ScreenLayout>
  );
};

export default CartPaymentList;
