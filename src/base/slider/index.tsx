import * as React from 'react';
import Carousel from 'react-native-snap-carousel';
import BackgroundImage from '../background-image';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export interface SliderProps {
  data: Array<any>;
}

const Slider: React.FC<SliderProps> = ({data}) => {
  return (
    <Carousel
      autoplay
      enableSnap
      autoplayDelay={200}
      data={data}
      sliderWidth={width - 24}
      itemWidth={width - 24}
      vertical={false}
      renderItem={({item}) => <BackgroundImage source={item} />}
    />
  );
};

export default Slider;
