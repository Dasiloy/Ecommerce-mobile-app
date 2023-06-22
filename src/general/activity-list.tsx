import React from 'react';
import {activity} from 'src/theme/asset';
import {FlatList} from 'native-base';
import NotificationListItem from './notification-list-item';
import {formatFullDayTimeMeridian} from 'src/lib/dates';

// this will be removed later
const activityList = [
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

const ActivityList = () => {
  return (
    <React.Fragment>
      <FlatList
        keyExtractor={i => i.title}
        showsVerticalScrollIndicator={false}
        data={activityList.map(o => ({
          ...o,
          imageUrl: activity,
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

export default ActivityList;
