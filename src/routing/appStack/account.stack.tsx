import * as React from 'react';
import {Screens} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import SettingsScreen from 'src/screens/account/settings,';

// account profile screens
// account orders screen
// account address screens
// account payments screens

const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.SETTINGS}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
