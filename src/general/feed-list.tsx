import React from 'react';
import {FlatList} from 'native-base';
import {FSNikeAirMax270} from 'src/theme/asset';
import NotificationListItem from './notification-list-item';
import {formatFullDayTimeMeridian} from 'src/lib/dates';

// this will be removed later
const feedList = [
  {
    title: 'New Product',
    text: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
  },
  {
    title: 'Best Product',
    text: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
  },
  {
    title: 'New Product 2',
    text: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
  },
];

const FeedList = () => {
  return (
    <React.Fragment>
      <FlatList
        keyExtractor={i => i.title}
        showsVerticalScrollIndicator={false}
        data={feedList.map(o => ({
          ...o,
          imageUrl: FSNikeAirMax270,
          time: formatFullDayTimeMeridian(Date.now())!,
        }))}
        renderItem={({item}) => (
          <NotificationListItem
            {...item}
            mb="8"
            imageHeight={48}
            imageWidth={48}
          />
        )}
      />
    </React.Fragment>
  );
};

export default FeedList;
