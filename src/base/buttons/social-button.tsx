import React from 'react';
import {Text, Image} from 'native-base';
import {colors} from 'src/theme/global/colors';
import {facebook, google} from 'src/theme/asset';
import {Social} from 'src/tyopescript/enums/social.enum';
import {TouchableOpacity, StyleSheet} from 'react-native';

export interface ISocialButtonProps {
  type: Social;
}

const SocialButton = (props: ISocialButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        ml="6"
        width="6"
        height="6"
        alt={props.type}
        source={props.type === Social.FACEBOOK ? facebook : google}
      />
      <Text mx="auto" color="neutralGray.400" size="md" fontWeight="500">
        {`Login with ${props.type}`}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.neutralLight[400],
  },
});

export default SocialButton;
