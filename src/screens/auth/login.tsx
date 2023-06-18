import React from 'react';
import {Button} from 'native-base';
import AuthLayout from 'src/layout/auth';
import EmailInput from 'src/base/inputs/mail-input';
import PasswordInput from 'src/base/inputs/password-input';
import useLogin from 'src/hooks/auth/useLogin';

const LoginScreen = () => {
  const {onLogin} = useLogin();
  return (
    <AuthLayout
      type="login"
      title="Welcome to Lafyuu"
      description="Sign in to continue">
      <EmailInput placeholder="Your Email" />
      <PasswordInput placeholder="Password" mb="6" />
      <Button onPress={onLogin}>Sign in</Button>
    </AuthLayout>
  );
};

export default LoginScreen;
