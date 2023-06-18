import {useEffect, useState} from 'react';
import {setUser} from 'src/lib/redux/auth';
import {useAppDispatch} from 'src/lib/redux/store';
import {IUser} from 'src/tyopescript/interfaces/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const user: IUser = {
  id: '1',
  name: 'Dasiloy John',
  email: 'dasiloy@gmail.com',
};

const useAuth = () => {
  const dispatch = useAppDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      try {
        setIsAuthenticating(true);
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // fetch the users data here
          // const user = await fetchUser();
          dispatch(setUser(user));
        } else {
          dispatch(setUser(null));
        }
      } catch (error) {
        dispatch(setUser(null));
      } finally {
        setTimeout(() => {
          setIsAuthenticating(false);
        }, 5500); // we will use this to dummy the api call for now, remove the timeout later
      }
    };
    authenticate();
  }, [dispatch]);

  return {isAuthenticating};
};

export default useAuth;
