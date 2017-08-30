//import libraries for making a components
import React  from 'react';
import { Text, View } from 'react-native';
//make a components
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    //destructuring used on styles.
    //if not using destructuring then
    //<View style={styles.viewStyle}>
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        <Text style={textStyle}>{props.blaText}</Text>
      </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 15,
    shadowColor: 'orange',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20
  }
};


//make the component available to other parts of the app
export default Header;


/*
*   https://stackoverflow.com/questions/41320131/how-to-set-shadows-in-react-native-for-android
*   https://github.com/879479119/react-native-shadow
*   shadowColor needs work to function on Android
*/
