import { Stack, Tabs } from "expo-router";
import { TouchableOpacity, View, Text,StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style ={styles.container}>
      <View style = {styles.header}>
        <TouchableOpacity>
          <Text>Hall Booking</Text>
        </TouchableOpacity>
      </View>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{headerShown: false}}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});