import React from 'react';
import {user} from './useAuth';
import {setUser} from 'src/lib/redux/auth';
import {useAppDispatch} from 'src/lib/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLogin = () => {
  const dispatch = useAppDispatch();
  // this will be modified later
  const onLogin = React.useCallback(async () => {
    // set tokrn
    await AsyncStorage.setItem('token', 'token');
    dispatch(setUser(user));
  }, [dispatch]);

  return {
    onLogin,
  };
};

export default useLogin;
