import * as React from 'react';
import {Screens} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import CategoriesScreen from 'src/screens/category/categories';

// category pages
// search results page
// category list page
// filter page
// sort page
const Stack = createNativeStackNavigator();
const ExploreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.CATEGORIES}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.CATEGORIES} component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
