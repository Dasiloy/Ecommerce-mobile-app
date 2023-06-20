import React from 'react';
import Section from 'src/base/section';
import {Screens} from 'src/routing/screens';
import ScreenLayout from 'src/layout/screen';
import HDivider from 'src/base/divider/h-divider';
import PageNavigator from 'src/general/page-navigator';
import NotificationItem from 'src/general/notification-item';
import {TNotification} from 'src/tyopescript/types/notification.type';

// images
import {offer, feed, activity} from 'src/theme/asset';

const NotificationsScreen = ({navigation}: any) => {
  const onPush = (title: TNotification) => {
    navigation.navigate(Screens.SINGLE_NOTIFICATION, {
      type: title,
    });
  };
  return (
    <ScreenLayout>
      <PageNavigator
        text="Notifications"
        onBack={() => navigation.navigate(Screens.HOME)}
      />
      <HDivider />
      <Section pt="3">
        <Section.Body allowPaddingRight>
          <NotificationItem
            image={offer}
            title="Offer"
            total={200}
            onPress={() => onPush('Offer')}
          />
          <NotificationItem
            image={feed}
            title="Feed"
            total={1}
            onPress={() => onPush('Feed')}
          />
          <NotificationItem
            image={activity}
            title="Activity"
            total={16}
            onPress={() => onPush('Activity')}
          />
        </Section.Body>
      </Section>
    </ScreenLayout>
  );
};

export default NotificationsScreen;
