//import libraries to create components
import React  from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

//component nesting
//nb: do not need .js extension as .js is expected by default
//if importing from node package, do not need to nominate path.
//all node packages are unique
//when importing from a file we generated, need to nomiate path
// style={{flex: 1 }} added to enable scrollview, works without anyway.
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//create compontent
const App = () => (
  <View style={{flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render component to screen
AppRegistry.registerComponent('demoProject', () => App);
/*
*   project-name (from react-native init project-name) = 'demoProject'
*   for every react native application created must register at least one component
*   NB: ONLY the root level component uses AppRegistry
*/
