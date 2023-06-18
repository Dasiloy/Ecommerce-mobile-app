import React from 'react';
import {Button} from 'native-base';
import AuthLayout from 'src/layout/auth';
import NameInput from 'src/base/inputs/name-input';
import EmailInput from 'src/base/inputs/mail-input';
import PasswordInput from 'src/base/inputs/password-input';
import useRegister from 'src/hooks/auth/useRegister';

const RegisterScreen = () => {
  const {onRegister} = useRegister();
  return (
    <AuthLayout
      type="register"
      title="Let's Get Started"
      description="Create a new account">
      <NameInput placeholder="Full Name" />
      <EmailInput placeholder="Your Email" />
      <PasswordInput placeholder="Password" />
      <PasswordInput placeholder="Password Again" mb="6" />
      <Button onPress={onRegister}>Sign up</Button>
    </AuthLayout>
  );
};

export default RegisterScreen;
