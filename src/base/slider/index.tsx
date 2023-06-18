import * as React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Banner1, Banner2} from 'src/theme/asset';
import BackgroundImage from '../background-image';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const Slider = () => {
  return (
    <Carousel
      autoplay
      enableSnap
      autoplayDelay={200}
      data={[Banner1, Banner2]}
      sliderWidth={width - 24}
      itemWidth={width - 24}
      vertical={false}
      renderItem={({item}) => <BackgroundImage source={item} />}
    />
  );
};

export default Slider;
