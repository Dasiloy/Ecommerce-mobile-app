import * as React from 'react';
import {Screens} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import CartScreen from 'src/screens/cart/cart';

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
    </Stack.Navigator>
  );
};

export default CartStack;
