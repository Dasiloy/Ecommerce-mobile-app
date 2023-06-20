import * as React from 'react';
import {Screens} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import HomeScreen from 'src/screens/home';
import HomeOfferScreen from 'src/screens/home-offer';
import FavouriteScreen from 'src/screens/favourite-screen';
import ReviewsScreen from 'src/screens/reviews-screen';
import NotificationsScreen from 'src/screens/notifications-screen';
import SingleNotificationScreen from 'src/screens/single-notification';
import CreateReviewScreen from 'src/screens/products/create-review-screen';
import ProductDetailsScreen from 'src/screens/products/product-details';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.HOME} component={HomeScreen} />
      <Stack.Screen name={Screens.REVIEWS} component={ReviewsScreen} />
      <Stack.Screen
        name={Screens.CREATE_REVIEW}
        component={CreateReviewScreen}
      />
      <Stack.Screen name={Screens.HOME_OFFER} component={HomeOfferScreen} />
      <Stack.Screen name={Screens.FAVOURITES} component={FavouriteScreen} />
      <Stack.Screen
        name={Screens.NOTIFICATIONS}
        component={NotificationsScreen}
      />
      <Stack.Screen
        name={Screens.SINGLE_NOTIFICATION}
        component={SingleNotificationScreen}
      />
      <Stack.Screen
        name={Screens.PRODUCT_DETAIL}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
