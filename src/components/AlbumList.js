//import libraries for making a components
import React, { Component }  from 'react';
import { Text, View } from 'react-native';

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
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((response) => this.setState({ albums: response }));
      //.then((response) => this.setState({ albums: response.data }));//this gave errors.
      //.then((response) => console.log(response));
      //  nb: pass in object {albums: response.data}
      //  has key 'albums', value response.data
      //
    console.log('componentWillMount in AlbumList - end');
  }
  render() {
    console.log(this.state);
    console.log(typeof this.state);
    return (
      <View>
        <Text>Album List</Text>
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
