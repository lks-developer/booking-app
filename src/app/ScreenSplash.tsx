import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ScreenSplash() {
  const router = useRouter();
  const [hasWaited, setHasWaited] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasWaited(true);
      router.push('/ScreenLogin');
    }, 5000); // 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // If the user navigates back to this screen after waiting 5 seconds, immediately redirect
    if (hasWaited) {
      setHasWaited(false);
      router.replace('/ScreenLogin');
    }
  }, [hasWaited, router]);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to HallBookingApp!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
