//import libraries for making a components
import React  from 'react';
import { Text } from 'react-native';
//make a components
const Header = () => {
    const { textStyle } = styles;
    return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 40
  }
};


//make the component available to other parts of the app
export default Header;
