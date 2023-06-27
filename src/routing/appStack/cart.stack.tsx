import * as React from 'react';
import {Screens} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import CartScreen from 'src/screens/cart/cart';
import CartCardList from 'src/screens/cart/cart-card-list';
import CartShippingList from 'src/screens/cart/cart-shipping-list';
import CartPaymentList from 'src/screens/cart/cart-payment-list';

// cart list page
// shipping list page
// payment list page
// single payment page
// cart success page

const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.CART}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.CART} component={CartScreen} />
      <Stack.Screen
        name={Screens.CART_SHIPPING_LIST}
        component={CartShippingList}
      />
      <Stack.Screen
        name={Screens.CART_PAYMENTS_LIST}
        component={CartPaymentList}
      />
      <Stack.Screen name={Screens.CART_CARD_LIST} component={CartCardList} />
    </Stack.Navigator>
  );
};

export default CartStack;
