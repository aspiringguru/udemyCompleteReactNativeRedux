import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

/*
*   consume the prop passed to this
*   ch41: Card replaces View in previous version.
*   transfer props to Card
*
*   nb: const AlbumDetail = (props) =>
*   changed to const AlbumDetail = ({ album }) =>
*   which enables <Text>{props.album.title}</Text>
*   to become <Text>{album.title}</Text>
*   NB: styles.thumbnailStyle required to pass height & width for image
*/
const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerContentStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
