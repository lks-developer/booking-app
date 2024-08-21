import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ScreenNotification from "../app/ScreenNotificaton";

export default function ComponentHeader() {
  const router = useRouter();
  const notificationPressHandler = () => {
    router.push("ScreenNotificaton");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hall Booking</Text>
      <TouchableOpacity style={styles.icon} onPress={notificationPressHandler}>
        <Ionicons name="notifications" size={22} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    right: 20,
  },
});
