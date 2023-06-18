import * as React from 'react';
import {Screens} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import HomeScreen from 'src/screens/home';
import HomeOfferScreen from 'src/screens/home-offer';
import FavouriteScreen from 'src/screens/favourite-screen';

// home screen
// home offer screen
// favourite products screens
// notifications screens
// product detail screen
// reviews screens
// homde offer ecreen

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.HOME} component={HomeScreen} />
      <Stack.Screen name={Screens.HOME_OFFER} component={HomeOfferScreen} />
      <Stack.Screen name={Screens.FAVOURITES} component={FavouriteScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
