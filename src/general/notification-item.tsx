import React from 'react';
import Label from './label';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Flex, View} from 'native-base';
import {TouchableOpacityProps} from 'react-native';
import type {TNotification} from 'src/tyopescript/types/notification.type';

export interface NotificationItemProps extends TouchableOpacityProps {
  image: string;
  title: TNotification;
  total: number;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  image,
  title,
  total,
  ...rest
}) => {
  return (
    <TouchableOpacity style={styles.item} {...rest}>
      <Flex direction="row" alignItems="center">
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={image as any}
            resizeMode="contain"
          />
        </View>
        <Text color="neutralDark.400" fontWeight={700} size="sm">
          {title}
        </Text>
      </Flex>
      <Label>{total}</Label>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    paddingVertical: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 16,
    height: 16,
    marginRight: 16,
  },
});

export default NotificationItem;
