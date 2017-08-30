//import libraries for making a components
import React  from 'react';
import { Text, View } from 'react-native';
//make a components
const Header = () => {
    const { textStyle, viewStyle } = styles;
    //destructuring used on styles.
    //if not using destructuring then
    //<View style={styles.viewStyle}>
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Albums!</Text>
      </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'orange',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 40
  }
};


//make the component available to other parts of the app
export default Header;


/*
*   https://stackoverflow.com/questions/41320131/how-to-set-shadows-in-react-native-for-android
*   https://github.com/879479119/react-native-shadow
*   shadowColor needs work to function on Android
*/
