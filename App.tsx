import React from 'react';
import theme from 'src/theme';
import store from 'src/lib/redux/store';
import AppNavigator from 'src/routing';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

// wrap the other providers here later so that we can have acess to everything
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
