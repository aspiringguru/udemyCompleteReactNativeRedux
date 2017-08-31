import React from 'react';
import { Text } from 'react-native';
import Card from './Card';


/*
*   consume the prop passed to this
*   ch41: Card replaces View in previous version.
*   transfer props to Card  
*/
const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
