import React from 'react';
import {HStack, Heading, Text, VStack, View} from 'native-base';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {Image, StyleSheet} from 'react-native';

export interface INotificationListItem extends Omit<IHStackProps, 'children'> {
  title: string;
  text: string;
  time: string;
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
}

const NotificationListItem: React.FC<INotificationListItem> = ({
  title,
  text,
  time,
  imageUrl,
  imageWidth,
  imageHeight,
  ...rest
}) => {
  return (
    <HStack space={3} {...rest}>
      <View
        mt="2px"
        style={{
          width: imageWidth,
          height: imageHeight,
        }}>
        <Image
          style={styles.image}
          source={imageUrl as any}
          resizeMode="contain"
        />
      </View>
      <VStack flex="1" space={1}>
        <Heading color="neutralDark.400" fontWeight={600} size="sm">
          {title}
        </Heading>
        <Text color="neutralGray.400" fontWeight={400} size="sm">
          {text}
        </Text>
        <Text color="neutralDark.400" fontWeight={400} size="xs">
          {time}
        </Text>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default NotificationListItem;
