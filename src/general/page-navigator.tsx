import React from 'react';
import IonicIcons from 'src/base/icons/ionic-icon';
import {Flex, IFlexProps, Text} from 'native-base';
import {colors} from 'src/theme/global/colors';
import {TouchableOpacity} from 'react-native';

export interface PageNavigatorProps extends IFlexProps {
  text: string;
  onBack: () => void;
}
const PageNavigator: React.FC<PageNavigatorProps> = ({
  text,
  onBack,
  children,
  ...rest
}) => {
  return (
    <Flex
      w="full"
      pb="4"
      px="3"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      {...rest}>
      <Flex direction="row" alignItems="center">
        <TouchableOpacity onPress={onBack}>
          <IonicIcons
            size={24}
            name="chevron-back-sharp"
            color={colors.neutralGray['400']}
          />
        </TouchableOpacity>
        <Text ml="4" mb="0" size="lg" fontWeight={600} color="neutralDark.400">
          {text}
        </Text>
      </Flex>
      {children}
    </Flex>
  );
};

export default PageNavigator;
