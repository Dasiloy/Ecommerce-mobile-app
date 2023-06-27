import React from 'react';
import {View, Button} from 'native-base';
import {Shadow} from 'react-native-shadow-2';

export interface BottomButtonProps {
  buttonText?: string;
  showShadow?: boolean;
  onPress?: () => void;
}
function BottomButton({
  showShadow,
  onPress,
  buttonText = 'Next',
}: BottomButtonProps) {
  return (
    <View bg="white" w="full" zIndex={2} position="absolute" bottom="0">
      <Shadow
        stretch
        disabled={!showShadow}
        startColor="rgba(0, 0, 0, 0.03)"
        sides={{
          top: true,
          bottom: false,
          start: false,
          end: false,
        }}>
        <View px="4" pt="3">
          <Button onPress={onPress}>{buttonText}</Button>
        </View>
      </Shadow>
    </View>
  );
}

export default BottomButton;
