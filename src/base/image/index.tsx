import React from 'react';
import {View} from 'native-base';
import {Image, ImageProps, StyleSheet} from 'react-native';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';

export interface IAppMageProps extends IViewProps {
  src: any;
  resizeMode?: ImageProps['resizeMode'];
}

const AppImage: React.FC<IAppMageProps> = ({
  width,
  height,
  style,
  src,
  resizeMode = 'contain',
}) => {
  return (
    <View mt="2px" width={width} height={height} style={style}>
      <Image style={styles.image} source={src} resizeMode={resizeMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default AppImage;
