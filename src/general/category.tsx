import React from 'react';
import {colors} from 'src/theme/global/colors';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {ICategory} from 'src/tyopescript/interfaces/category.interface';
import {Box, Text} from 'native-base';

export interface CategoryProps extends ICategory {
  onPress: () => void;
}

const Category: React.FC<CategoryProps> = ({name, url}) => {
  return (
    <Box width={'70px'} mr="4">
      <TouchableOpacity style={styles.button}>
        <Image source={url as any} style={styles.image} />
      </TouchableOpacity>
      <Text
        mt="2"
        textAlign="center"
        size="xs"
        color="neutralGray.400"
        fontWeight={400}>
        {name}
      </Text>
    </Box>
  );
};

export default Category;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: '100%',
    borderWidth: 1,
    borderRadius: 66,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.neutralLight[300],
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
