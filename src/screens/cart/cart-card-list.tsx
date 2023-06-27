import React from 'react';
import ScreenLayout from 'src/layout/screen';
import HDivider from 'src/base/divider/h-divider';
import PageNavigator from 'src/general/page-navigator';
import AddNewIcon from 'src/base/icons/pressable-icons/add-new-icon';
import {Box, useDisclose} from 'native-base';
import BottomButton from 'src/general/bottom-button';
import Slider from 'src/base/slider';
import {slidecard1} from 'src/theme/asset';
import Section from 'src/base/section';
import SuccessModal from 'src/base/modal/success-modal';
import {Screens} from 'src/routing/screens';

const CartCardList = ({navigation}: any) => {
  const {isOpen, onClose, onOpen} = useDisclose();

  const onCloseModal = () => {
    onClose();
    navigation.navigate(Screens.HOME_TAB);
  };

  return (
    <React.Fragment>
      <SuccessModal isOpen={isOpen} onClose={onCloseModal} />
      <ScreenLayout>
        <PageNavigator text="Choose Card" onBack={() => navigation.goBack()}>
          <AddNewIcon />
        </PageNavigator>
        <HDivider />
        <Box flex="1">
          <Section pt="0">
            <Section.Body allowPaddingRight>
              <Slider data={[slidecard1, slidecard1]} />
            </Section.Body>
          </Section>
          <BottomButton onPress={onOpen} buttonText="Pay $766.86" />
        </Box>
      </ScreenLayout>
    </React.Fragment>
  );
};

export default CartCardList;
