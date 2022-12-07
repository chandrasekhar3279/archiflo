import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export const CustomButton = ({onPress, title, style, children}) => {
  TouchableOpacity.defaultProps = {activeOpacity: 0.8};
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style}>
        {children}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 200,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009688',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonTextStyles: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
export default CustomButton;
