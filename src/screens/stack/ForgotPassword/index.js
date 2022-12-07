import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import AppStyles from '../../../styles/AppStyles';

export const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={AppStyles.container}>
      <Text style={AppStyles.loginTitle}>Account Recovery</Text>
      <Text style={AppStyles.forgotText}>
        To help keep your account safe, Archiflo wants to make sure it's really
        you trying to signin.
      </Text>
      <CustomInput placeholder="Archiflo ID" borderRadius={8} />
    </SafeAreaView>
  );
};
export default ForgotPassword;
