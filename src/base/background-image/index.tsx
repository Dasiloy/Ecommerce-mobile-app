import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
} from 'react-native';

const {height} = Dimensions.get('window');
export interface BackgroundImageProps extends ImageBackgroundProps {}
const BackgroundImage: React.FC<BackgroundImageProps> = ({
  source,
  style,
  ...rest
}) => {
  return (
    <ImageBackground
      source={source}
      resizeMode="cover"
      style={style ? [styles.image, style] : styles.image}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: height / 3.5,
    width: '100%',
    borderRadius: 10,
  },
});

export default BackgroundImage;
