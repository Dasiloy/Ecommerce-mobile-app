import React from 'react';
import Section from 'src/base/section';
import {Screens} from 'src/routing/screens';
import ScreenLayout from 'src/layout/screen';
import HDivider from 'src/base/divider/h-divider';
import PageNavigator from 'src/general/page-navigator';
import {useRoute} from '@react-navigation/native';
import {TNotification} from 'src/tyopescript/types/notification.type';
import OfferList from 'src/general/offer-list';
import ActivityList from 'src/general/activity-list';
import FeedList from 'src/general/feed-list';

const SingleNotificationScreen = ({navigation}: any) => {
  const {params} = useRoute<any>();
  const type = params.type as TNotification;
  return (
    <ScreenLayout>
      <PageNavigator
        text={type}
        onBack={() => navigation.navigate(Screens.NOTIFICATIONS)}
      />
      <HDivider />
      <Section>
        <Section.Body>
          {type === 'Offer' && <OfferList />}
          {type === 'Activity' && <ActivityList />}
          {type === 'Feed' && <FeedList />}
        </Section.Body>
      </Section>
    </ScreenLayout>
  );
};

export default SingleNotificationScreen;
