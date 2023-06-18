import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

export interface IscreenLayoutProps {
  children: React.ReactNode;
}
const ScreenLayout: React.FC<IscreenLayoutProps> = ({children}) => {
  return (
    <React.Fragment>
      {Platform.OS === 'ios' ? (
        <View style={styles.statusBar} /> // ios have no status bar only for android
      ) : (
        <StatusBar animated barStyle="dark-content" backgroundColor="white" />
      )}
      <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 0 : 16,
  },
  statusBar: {
    height: 40,
    backgroundColor: 'white',
  },
});

export default ScreenLayout;
