import { Stack, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import ComponentHeader from "../../components/ComponentHeader";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <ComponentHeader/>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{ headerShown: false, tabBarLabel: "",
            tabBarIcon:({focused, color,size})=>(
              <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
              />
            ) }}
        />

<Tabs.Screen
          name="ScreenBookings"
          options={{ headerShown: false, tabBarLabel: "" ,
            tabBarIcon:({focused, color,size})=>(
              <Ionicons
              name={focused ? 'book' : 'book-outline'}
              size={size}
              color={color}
              />
            )
          }}
        />
        <Tabs.Screen
          name="ScreenAccount"
          options={{ headerShown: false, tabBarLabel: "" ,
            tabBarIcon:({focused, color,size})=>(
              <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
              />
            )
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
