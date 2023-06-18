import * as React from 'react';
import {selectUser} from 'src/lib/redux/auth';
import useAuth from 'src/hooks/auth/useAuth';
import {enableScreens} from 'react-native-screens';
import {useAppSelector} from 'src/lib/redux/store';
import {NavigationContainer} from '@react-navigation/native';

// app stacks
import Authstack from './authStack';
import AppTabs from './appStack';
import Loadingscreen from 'src/general/loading-screen';
import {Platform} from 'react-native';

export default function AppNavigator() {
  const {isAuthenticating} = useAuth();
  const user = useAppSelector(selectUser);

  React.useEffect(() => {
    if (Platform.OS === 'ios') {
      enableScreens(false);
    }
  }, []); // this is to handle flickering screens and hiding bottom tabs when navigating

  if (isAuthenticating) {
    return <Loadingscreen />;
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <Authstack />}
    </NavigationContainer>
  );
}
