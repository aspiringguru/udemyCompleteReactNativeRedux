/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ActivityIndicator,
  ListView,
  Text,
  View
} from 'react-native';

export default class demoProject extends Component {
  constructor(props) {
	    super(props);
	    this.state = {
	      isLoading: true
	  }
	}/* end constructor(props) */

  /* todo: github caches edits, need url which references latest edit. or try another host. */
  componentDidMount() {
      let url = "https://raw.githubusercontent.com/aspiringguru/reactNativeDemo2/master/ch5-5-fetch_data/mydata.json"
      return fetch(url, {headers: {'Cache-Control': 'no-cache'}} )
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.movies),
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }/* end componentDidMount */

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
      /*  if not (this.state.isLoading)  */
      return (
        <View style={{flex: 1, paddingTop: 20}}>
        <Text>xxxxxxxxxxx</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <Text>{rowData.title}, {rowData.releaseYear}, {rowData.rating}
              </Text>}
          />
        </View>
      ); /* end return */
    }/* end render */


}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('demoProject', () => demoProject);
