import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

/*
*   consume the prop passed to this
*   ch41: Card replaces View in previous version.
*   transfer props to Card
*/
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.artist}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
