//import libraries for making a components
import React, { Component }  from 'react';
import { Text, View } from 'react-native';

//const AlbumList = () => {
//replace previous functional component with class component
//render method returns valid JSX
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List</Text>
        <Text>222!-------</Text>
        <Text>333-------</Text>
      </View>
    );
  }
}


//make the component available to other parts of the app
export default AlbumList;

/*
*   functional component
*   class component
*
*
*/
