import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import AppStyle from '../../../styles/AppStyles';

export const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={AppStyle.loginTitle}>Archiflo & Privacy</Text>
      </View>
      <View>
        <Text style={AppStyle.signUpInfofont}>
          Your searches, browsing, and other activities help people the service
          and provide personalized product recommendations.
        </Text>
        <Text style={AppStyle.signUpInfoAbout}>
          See how your data is managed...
        </Text>
      </View>
      <View>
        <Text style={AppStyle.signUpInfofont}>
          With your new Archiflo ID, you will be able to sign in to available
          services. Archiflo records certain usage data for security, support
          and reporting purposes.
        </Text>
        <Text style={AppStyle.signUpInfoAbout}>
          See how your data is managed...
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View>
          <CustomButton title="Back">
            <Text>Back</Text>
          </CustomButton>
        </View>
        <View>
          <CustomButton title="Continue">
            <Text>Continue</Text>
          </CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    // flex: 0.5,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default SignUp;
