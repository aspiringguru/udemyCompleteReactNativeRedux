/*
*   https://facebook.github.io/react-native/docs/touchablehighlight.html
*   https://facebook.github.io/react-native/docs/touchablenativefeedback.html
*   https://facebook.github.io/react-native/docs/touchableopacity.html
*   https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html
*
*/
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity>
      <Text>
        Click me!!!
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
