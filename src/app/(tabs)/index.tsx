import React from "react";
import { Tabs } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ScreenDashboard() {
  const recommendedHotels = [
    {
      id: "1",
      name: "OasisOverture",
      location: "Bhubaneswar, INDIA",
      price: "$650",
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "HiddenHaven",
      location: "Bhubaneswar, INDIA",
      price: "$550",
      rating: 4.4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      name: "HiddenHaven",
      location: "Bhubaneswar, INDIA",
      price: "$550",
      rating: 4.4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "4",
      name: "HiddenHaven",
      location: "Bhubaneswar, INDIA",
      price: "$550",
      rating: 4.4,
      image: "https://via.placeholder.com/150",
    },
  ];

  const nearbyHotels = [
    {
      id: "1",
      name: "GoldenValley",
      location: "Bhubaneswar, INDIA",
      price: "$150",
      rating: 4.9,
      image: "https://via.placeholder.com/150",
    },
  ];

  const dates = [
    { day: "21", dayName: "WED" },
    { day: "22", dayName: "THU" },
    { day: "23", dayName: "FRI" },
    { day: "24", dayName: "SAT" },
    { day: "25", dayName: "SUN" },
  ];

  const renderHallCard = ({ item }) => {
    if (!item) return null; // Prevent rendering if item is null or undefined
    return (
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.hotelImage} />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>{item.name}</Text>
          <Text style={styles.hotelLocation}>{item.location}</Text>
          <Text style={styles.hotelPrice}>{item.price} /night</Text>
          <Text style={styles.hotelRating}>⭐ {item.rating}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderDateItem = ({ item }) => (
    <TouchableOpacity style={styles.dateItem}>
      <Text style={styles.day}>{item.day}</Text>
      <Text style={styles.dayName}>{item.dayName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Tabs></Tabs>
      {/* Search header */}
      <View style={styles.header}>
        <View>
          <TouchableOpacity style={styles.locationRow}>
            <Ionicons name="location-outline" size={24} color="black" />
            {/* <Text style={styles.label}>Location</Text> */}
            <Text style={styles.locationText}>Bhubaneswar</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FlatList
              data={dates}
              renderItem={renderDateItem}
              keyExtractor={(item) => item.day}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.dateList}
            />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Text>Aug</Text>
                <Text>2024</Text>
              </View>
            
              <Ionicons name="chevron-down-outline" size={24} color="#d9534f" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Screen Content */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended Halls</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recommendedHotels}
          renderItem={renderHallCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby Halls</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={nearbyHotels}
            renderItem={renderHallCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    elevation: 3,
  },
  section: {
    marginBottom: 20,
    justifyContent: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 16,
    color: "#007bff",
  },
  card: {
    width: 150,
    marginRight: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 3,
  },
  hotelImage: {
    width: "100%",
    height: 100,
  },
  hotelInfo: {
    padding: 10,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  hotelLocation: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  hotelPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  hotelRating: {
    fontSize: 14,
    color: "#555",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginLeft: 5,
    color: "#888",
  },
  locationText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  dateList: {
    paddingHorizontal: 20,
  },
  dateItem: {
    alignItems: "center",
    marginRight: 20,
  },
  day: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d9534f",
  },
  dayName: {
    fontSize: 14,
    color: "#888",
  },
});
