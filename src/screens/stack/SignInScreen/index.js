import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import Icon from 'react-native-vector-icons/Foundation';
import AppStyles from '../../../styles/AppStyles';
import CustomButton from '../../../components/CustomButton';
// import Icon  from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

export const SignInScreen = ({navigation}) => {
  const handleLogin = async () => {
    const resp = await fetch('https://api.archiflo.com/login', {
      email: 'Chandra@cloudseed.io',
      password: 'Test@123',
    });
    const data = await resp.json();
    console.log('Checking', data);
  };

  return (
    <View style={AppStyles.container}>
      <View>
        <Text style={AppStyles.logoTitle}>Archiflo</Text>
        <Text style={AppStyles.loginTitle}>Sign in with your Archiflo ID</Text>
      </View>

      <View>
        <CustomInput
          placeholder="Enter Your Email"
          borderTopLeftRadius={8}
          borderTopRightRadius={8}
          borderBottomWidth={0.5}
          // mode="outlined"
        />
        <View style={{flexDirection: 'row', display: 'flex'}}>
          <View
            style={{
              // alignItems: 'center',
              justifyContent: 'space-evenly',
              // backgroundColor: 'red',
              position: 'relative',
            }}>
            <CustomInput
              placeholder="Password"
              // mode="outlined"
              borderBottomLeftRadius={8}
              borderBottomRightRadius={8}
              borderTopWidth={0.5}
              secureTextEntry
            />
          </View>
          <View
            style={{
              position: 'absolute',
              // alignItems: 'center',
              // justifyContent: 'center',
              // backgroundColor: 'grey',
              // display: 'flex',
              // justifyContent: 'space-between',
              top: 12.5,
              // bottom: '50%',
              right: 15,
            }}>
            <CustomButton onPress={handleLogin}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 50,
                  backgroundColor: 'grey',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="arrow-right"
                  size={20}
                  color="white"
                  // height={20}
                  // width={20}
                  // borderRadius={50}
                />
              </View>
            </CustomButton>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={AppStyles.linkingForgot}
          onPress={() => navigation.navigate('SignUp')}>
          Create New Archiflo ID
        </Text>
        <Text
          style={AppStyles.linkingForgot}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Archiflo ID or Password
        </Text>
      </View>
      {/* <Icon name="book" size={40} /> */}
    </View>
  );
};

const Styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
  },
  btnClr: {
    position: 'absolute',
    height: 40,
    width: 40,
    // borderRadius: '50%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SignInScreen;
