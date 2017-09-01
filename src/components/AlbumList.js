//import libraries for making a components
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';


//const AlbumList = () => {
//replace previous functional component with class component
//render method returns valid JSX
//only use state with class based Components.
class AlbumList extends Component {
  //add a class level property and set to object
  //with key = 'albums' & value set to empty array
  state = { albums: [] };
  /*
  *   when component is about to be rendered to screen
  *   componentWillMount is executed.
  *   need to deal with asynchronous data loading.
  *   need to deal with changing state.
  *   setState causes re-rendering when response received from url
  */
  componentWillMount() {
    console.log('componentWillMount in AlbumList - start');
    //fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //moved to github.
    fetch('https://raw.githubusercontent.com/aspiringguru/udemyCompleteReactNativeRedux/master/music_albums')
      .then(response => response.json())
      .then(response => this.setState({ albums: response }));
      //.then((response) => this.setState({ albums: response.data }));//this gave errors.
      //.then((response) => console.log(response));
      //  nb: pass in object {albums: response.data}
      //  has key 'albums', value response.data
      //
    console.log('componentWillMount in AlbumList - end');
  }

  /*
  *   to prevent unique key error when rendering elements
  *   Warning: Each child in an array or iterator should have a unique "key" prop.
  *   add unique key to the repeated content
  *   ie:   <Text key={album.title}>{album.title}</Text>);
  *   NB: in this case title column is unique, usually look for id column.
  *
  *   ch38: need to pass data from parent to child - use props
  *   nb: have used album = {album} but could be xxx = {album}
  *   ie: the name of the variable 'xxx' does not have to = name of the prop.
  */
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    console.log(typeof this.state);
    return (
      <View>
        <Text>Album List</Text>
        {this.renderAlbums()}
      </View>
    );
  }
}


//make the component available to other parts of the app
export default AlbumList;

/*
*   functional component
*   class component
*   class component have lifecycle
*
*/
