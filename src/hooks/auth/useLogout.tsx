import React from 'react';
import {setUser} from 'src/lib/redux/auth';
import {useAppDispatch} from 'src/lib/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLogout = () => {
  const dispatch = useAppDispatch();
  const [isLoggingOut, setIsLoggingout] = React.useState(false);

  const onLogout = React.useCallback(async () => {
    try {
      setIsLoggingout(true);
      await AsyncStorage.removeItem('token');
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoggingout(false);
      }, 5500); // we will use this to dummy the api call for now, remove the timeout later
    }
  }, [dispatch]);

  return {
    onLogout,
    isLoggingOut,
  };
};

export default useLogout;
