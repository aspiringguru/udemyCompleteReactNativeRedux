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
*   destructuring : ie const { a,b,c } = styles replaces styles.a, styles.b etc.
*/
const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image } = album;
  const {
    headerTextStyle,
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
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
  headerTextStyle: {
    fontSize: 18,
    color: 'red',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
