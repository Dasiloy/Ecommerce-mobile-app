import React from 'react';
import {offer} from 'src/theme/asset';
import {FlatList} from 'native-base';
import NotificationListItem from './notification-list-item';
import {formatFullDayTimeMeridian} from 'src/lib/dates';

// this will be removed later
const offerList = [
  {
    title: 'The Best Title',
    text: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
  },
  {
    title: 'SUMMER OFFER 98% Cashback',
    text: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
  },
  {
    title: 'Special Offer 25% OFF',
    text: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
  },
];

const OfferList = () => {
  return (
    <React.Fragment>
      <FlatList
        keyExtractor={i => i.title}
        showsVerticalScrollIndicator={false}
        data={offerList.map(o => ({
          ...o,
          imageUrl: offer,
          time: formatFullDayTimeMeridian(Date.now())!,
        }))}
        renderItem={({item}) => (
          <NotificationListItem
            {...item}
            mb="8"
            imageHeight={16}
            imageWidth={16}
          />
        )}
      />
    </React.Fragment>
  );
};

export default OfferList;
