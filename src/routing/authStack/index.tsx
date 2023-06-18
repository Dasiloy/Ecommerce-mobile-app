import * as React from 'react';
import {Screens} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all screens
import LoginScreen from 'src/screens/auth/login';
import RegisterScreen from 'src/screens/auth/register';

const Stack = createNativeStackNavigator();
function Authstack() {
  return (
    <Stack.Navigator
      initialRouteName={Screens.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Screens.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default Authstack;
