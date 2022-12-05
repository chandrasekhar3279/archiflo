import React from 'react';
import {View, Text} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const HomeScreen = () => {
  return (
    <View>
      <Text>Sign in with your Archiflo ID</Text>
      <CustomInput
        placeholder="Enter Your Email"
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        borderBottomWidth={0.5}
        // mode="outlined"
      />
      <CustomInput
        placeholder="Password"
        // mode="outlined"
        borderBottomLeftRadius={8}
        borderBottomRightRadius={8}
        borderTopWidth={0.5}
        secureTextEntry
      />
      {/* <Icon name="book" size={40} /> */}
    </View>
  );
};
