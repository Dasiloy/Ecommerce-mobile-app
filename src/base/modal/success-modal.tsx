import React from 'react';
import {Modal} from 'react-native';
import {Box, Button, Center, Heading, Text} from 'native-base';
import AppImage from '../image';
import {successIcon} from 'src/theme/asset';

export interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({isOpen, onClose}) => {
  return (
    <Modal
      visible={isOpen}
      transparent={false}
      animationType="fade"
      presentationStyle="fullScreen">
      <Box px="4" flex="1" bg="white" justifyContent="center">
        <Center>
          <AppImage
            src={successIcon}
            width="120px"
            height="120px"
            resizeMode="contain"
          />
        </Center>
        <Heading
          color="neutralDark.400"
          size="xl"
          textAlign="center"
          mt="-10px"
          mb="2">
          Success
        </Heading>
        <Text size="md" color="neutralGray.400" textAlign="center" mb="4">
          thank you for shopping using lafyuu
        </Text>
        <Button onPress={onClose}>Back to Order</Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
