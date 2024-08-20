import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, BackHandler } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';

export default function ScreenLogin() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    // Add event listener for the hardware back button on Android
    const backAction = () => {
      BackHandler.exitApp();
      return true; // Prevent default back behavior
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    };
  }, []);

  const handleSendOtp = () => {
    // Simulate OTP send
    setIsOtpSent(true);
  };

  const handleConfirmOtp = () => {
    // Simulate OTP verification and navigation to dashboard
    router.push('/ScreenDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login / Sign Up</Text>
      {!isOtpSent ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          <Button title="Send OTP" onPress={handleSendOtp} />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
          />
          <Button title="Confirm OTP" onPress={handleConfirmOtp} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
