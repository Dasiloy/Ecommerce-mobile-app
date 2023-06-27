import React from 'react';
import ScreenLayout from 'src/layout/screen';
import IonicIcons from 'src/base/icons/ionic-icon';
import {colors} from 'src/theme/global/colors';
import HDivider from 'src/base/divider/h-divider';
import PageNavigator from 'src/general/page-navigator';
import ShippingItem from 'src/general/shipping-item';
import {AppRepository} from 'src/tyopescript/classes/app.class';
import {Pressable, Box, FlatList} from 'native-base';
import BottomButton from 'src/general/bottom-button';
import {Screens} from 'src/routing/screens';

const app = AppRepository.getInstance();

const CartShippingList = ({navigation}: any) => {
  return (
    <ScreenLayout>
      <PageNavigator text="Ship to" onBack={() => navigation.goBack()}>
        <Pressable
          w="8"
          h="6"
          display="flex"
          alignItems="center"
          flexDirection="row"
          onPress={() => {}}
          justifyContent="center">
          <IonicIcons size={24} name="add" color={colors.primary['400']} />
        </Pressable>
      </PageNavigator>
      <HDivider />
      <Box flex="1">
        <Box px="4">
          <FlatList
            pt="6"
            data={app.shipping}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ShippingItem shipping={item} key={item._id} />
            )}
          />
        </Box>
        <BottomButton
          showShadow
          onPress={() => navigation.navigate(Screens.CART_PAYMENTS_LIST)}
        />
      </Box>
    </ScreenLayout>
  );
};

export default CartShippingList;
