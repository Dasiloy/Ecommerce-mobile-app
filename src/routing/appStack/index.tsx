/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Screens} from '../screens';
import {colors} from 'src/theme/global/colors';
import TabBarLabel from '../tab-bar-label';
import TabBarIcon from '../tab-bar-icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import stacks
import HomeStack from './home.stack';
import OffersStack from './offer.stack';
import CartStack from './cart.stack';
import AccountStack from './account.stack';
import ExploreStack from './category.stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME_TAB}
      screenOptions={{
        headerShown: false,
        tabBarLabel: TabBarLabel,
        tabBarStyle: {
          height: 50,
          paddingTop: 5,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: 'white',
          borderTopColor: colors.neutralLight['400'],
        },
        tabBarActiveTintColor: colors.primary['400'],
        tabBarInactiveTintColor: colors.neutralGray['400'],
      }}>
      <Tab.Screen
        name={Screens.HOME_TAB}
        component={HomeStack}
        options={({route}) => ({
          tabBarIcon: props => <TabBarIcon {...props} name="home-outline" />,
          tabBarStyle: (Route => {
            // make this function reusable
            const routeName = (getFocusedRouteNameFromRoute(Route) ??
              '') as Screens;
            if (
              [
                Screens.HOME_OFFER,
                Screens.FAVOURITES,
                Screens.NOTIFICATION,
                Screens.PRODUCT_DETAIL,
                Screens.REVIEW,
              ].includes(routeName)
            ) {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name={Screens.EXPLORE_TAB}
        component={ExploreStack}
        options={{
          tabBarIcon: props => <TabBarIcon {...props} name="search-outline" />,
        }}
      />
      <Tab.Screen
        name={Screens.CART_TAB}
        component={CartStack}
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            color: '#fff',
            backgroundColor: colors.secondary['400'],
          },
          tabBarIcon: props => <TabBarIcon {...props} name="cart-outline" />,
        }}
      />
      <Tab.Screen
        name={Screens.OFFER_TAB}
        component={OffersStack}
        options={{
          tabBarIcon: props => <TabBarIcon {...props} name="tago" />,
        }}
      />
      <Tab.Screen
        name={Screens.ACCOUNT_TAB}
        component={AccountStack}
        options={{
          tabBarIcon: props => <TabBarIcon {...props} name="person-outline" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabs;
