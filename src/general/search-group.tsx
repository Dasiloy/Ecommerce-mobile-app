import React from 'react';
import Badge from 'src/base/badge';
import {useNavigation} from '@react-navigation/native';
import {HStack, IStackProps} from 'native-base';
import SearchInput from 'src/base/inputs/search-input';
import IonicIcons from 'src/base/icons/ionic-icon';
import {colors} from 'src/theme/global/colors';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Screens} from 'src/routing/screens';

interface SearchGroupProps extends IStackProps {}
const SearchGroup: React.FC<SearchGroupProps> = props => {
  const [focused, setFocused] = React.useState(false);
  const navigation = useNavigation<any>();
  return (
    <HStack
      px="3"
      w="full"
      alignItems="center"
      justifyContent="space-between"
      {...props}>
      <SearchInput
        placeholder="Search Products"
        w={focused ? 'full' : '4/5'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <HStack space={2} alignItems="center" display={focused ? 'none' : 'flex'}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.FAVOURITES)}>
          {/* navigate the user to the favourites screen */}
          <IonicIcons
            size={22}
            name="heart-outline"
            color={colors.neutralGray['400']}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          {/* navigate the user to the nofications screen */}
          <Badge placement="top-right" />
          <IonicIcons
            size={22}
            name="md-notifications-outline"
            color={colors.neutralGray['400']}
          />
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
  },
});

export default SearchGroup;
