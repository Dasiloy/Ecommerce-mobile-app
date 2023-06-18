import {VStack} from 'native-base';
import React from 'react';
import SocialButton from 'src/base/buttons/social-button';
import {Social} from 'src/tyopescript/enums/social.enum';

const SocialLogin = () => {
  return (
    <VStack space="2">
      <SocialButton type={Social.GOOGLE} />
      <SocialButton type={Social.FACEBOOK} />
    </VStack>
  );
};

export default SocialLogin;
