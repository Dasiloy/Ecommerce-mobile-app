import * as React from 'react';
import {Screens} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import OffersScreen from 'src/screens/products/offers';

const Stack = createNativeStackNavigator();
const OffersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.OFFERS}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.OFFERS} component={OffersScreen} />
    </Stack.Navigator>
  );
};

export default OffersStack;
