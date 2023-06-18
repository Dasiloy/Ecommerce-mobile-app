import React from 'react';
import {
  Platform,
  Keyboard,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Box,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Heading,
  Image,
} from 'native-base';
import {authLogo} from 'src/theme/asset';
import AuthFooter, {
  IAuthFooterProps,
} from 'src/layout/auth/components/auth-footer';
import AuthDivider from './components/auth-divider';
import SocialLogin from './components/social-login';

const {height} = Dimensions.get('window');

export interface IAuthLayoutProps extends IAuthFooterProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({
  title,
  children,
  description,
  type,
}) => {
  return (
    <KeyboardAvoidingView
      flex="1"
      bg="white"
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box p="4">
            {/* images and text wull be here */}
            <Box style={styles.header}>
              <Image
                mb="4"
                source={authLogo}
                alt="Logo"
                width="72px"
                height="72px"
              />
              <Heading
                size="md"
                mb="2"
                color="neutralDark.400"
                fontWeight="700">
                {title}
              </Heading>
              <Text size="sm" color="neutralGray.400" fontWeight="400">
                {description}
              </Text>
            </Box>
            {/* input and butytons will stay here */}
            {children}
            {type === 'login' && (
              <React.Fragment>
                <AuthDivider />
                <SocialLogin />
              </React.Fragment>
            )}
            <AuthFooter type={type} />
          </Box>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: height * 0.15 - 16,
    marginBottom: 28,
    alignItems: 'center',
  },
});

export default AuthLayout;
