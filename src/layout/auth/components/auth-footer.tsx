import React from 'react';
import {Center, Flex, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Screens} from 'src/routing/screens';
import {useNavigation} from '@react-navigation/native';

export interface IAuthFooterProps {
  type: 'login' | 'register';
}

const AuthFooter = (props: IAuthFooterProps) => {
  const {navigate} = useNavigation<any>();
  switch (props.type) {
    case 'login':
      return (
        <Center my="4" mt="5">
          <Center mb="2">
            <TouchableOpacity onPress={() => navigate(Screens.FORGOT_PASSWORD)}>
              <Text size="sm" fontWeight="bold" color="primary.400">
                Forgot Password
              </Text>
            </TouchableOpacity>
          </Center>
          <Flex direction="row" alignItems="center" justifyContent="center">
            <Text size="sm" fontWeight="bold" mr="2" color="neutralGray.400">
              Don't have an account yet?
            </Text>
            <TouchableOpacity onPress={() => navigate(Screens.REGISTER)}>
              <Text size="sm" fontWeight="bold" color="primary.400">
                Register
              </Text>
            </TouchableOpacity>
          </Flex>
        </Center>
      );
    case 'register':
      return (
        <Center my="4">
          <Flex direction="row" alignItems="center" justifyContent="center">
            <Text size="sm" fontWeight="bold" mr="2" color="neutralGray.400">
              Have an account?
            </Text>
            <TouchableOpacity onPress={() => navigate(Screens.LOGIN)}>
              <Text size="sm" fontWeight="bold" color="primary.400">
                Sign in
              </Text>
            </TouchableOpacity>
          </Flex>
        </Center>
      );
    default:
      return null;
  }
};

export default AuthFooter;
