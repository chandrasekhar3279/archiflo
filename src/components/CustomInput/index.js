import React from 'react';
import {View, TextInput} from 'react-native';
// import {TextInput} from 'react-native-paper';
export const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  right,
  onBlur,
  style,
  height,
  width,
  borderColor,
  borderWidth,
  placeholderTextColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomWidth,
  borderRadius,
  mode,
  borderTopWidth,
  onFocus = () => {},
}) => {
  return (
    <View>
      <TextInput
        // mode={mode}
        multiline={false}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        underlineColor={true}
        activeUnderlineColor={true}
        autoCapitalize={true}
        // placeholderTextColor={'blue'}
        borderWidth={1}
        // theme={{roundness: 5}}
        paddingHorizontal={20}
        style={
          (style,
          {
            height: height,
            width: width,
            borderColor: borderColor,
            placeholderTextColor: placeholderTextColor,
            borderTopLeftRadius: borderTopLeftRadius,
            borderTopRightRadius: borderTopRightRadius,
            borderBottomLeftRadius: borderBottomLeftRadius,
            borderBottomRightRadius: borderBottomRightRadius,
            borderRadius: borderRadius,
            borderBottomWidth: borderBottomWidth,
            borderTopWidth: borderTopWidth,
          })
        }
        right={right}
      />
    </View>
  );
};

CustomInput.defaultProps = {
  height: 50,
  width: 300,
  borderColor: 'grey',
  placeholderTextColor: 'grey',
};
export default CustomInput;
