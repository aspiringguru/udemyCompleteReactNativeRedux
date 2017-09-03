/*
*   https://facebook.github.io/react-native/docs/touchablehighlight.html
*   https://facebook.github.io/react-native/docs/touchablenativefeedback.html
*   https://facebook.github.io/react-native/docs/touchableopacity.html
*   https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html
*   onPress={() => console.log('pressed')}
*   https://facebook.github.io/react-native/docs/handling-touches.html
*/
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/*
*   const Button = (onPress)
*   prop onPress is the object passed to Button from AlbumDetail.js
*   NBB: { onPress } required, not onPress
*   nbb: changed from onPress={() => console.log("blad"))}
*   to onPress={onPress}
*/
const Button = ({ onPress, text }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};


export default Button;
