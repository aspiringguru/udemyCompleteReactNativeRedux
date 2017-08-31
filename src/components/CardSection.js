import React from 'react';
import { View } from 'react-native';

/*
*
* make this a functional componentaa
* nb: CardSection borderbottomWidth = 1 while Card borderbottomWidth = 0
*/
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
