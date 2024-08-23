import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

export default function ScreenBooking() {
  const bookingData = [
    {
      id: '1',
      hallName: 'Grand Hall',
      location: 'New York, USA',
      image: 'https://via.placeholder.com/150',
      fromDate: '2024-09-01',
      toDate: '2024-09-02',
      slots: ['Morning Slot', 'Evening Slot'], // Two slots
      pricePerSlot: 100, // Price per slot
    },
    {
      id: '2',
      hallName: 'Royal Palace',
      location: 'Los Angeles, USA',
      image: 'https://via.placeholder.com/150',
      fromDate: '2024-09-05',
      toDate: '2024-09-05',
      slots: ['Morning Slot'], // One slot
      pricePerSlot: 120,
    },
    {
      id: '3',
      hallName: 'Sunrise Banquet',
      location: 'Miami, USA',
      image: 'https://via.placeholder.com/150',
      fromDate: '2024-09-10',
      toDate: '2024-09-11',
      slots: ['Evening Slot'], // One slot
      pricePerSlot: 90,
    },
    {
      id: '4',
      hallName: 'Blue Sky Hall',
      location: 'Chicago, USA',
      image: 'https://via.placeholder.com/150',
      fromDate: '2024-09-15',
      toDate: '2024-09-16',
      slots: ['Morning Slot', 'Evening Slot'], // Two slots
      pricePerSlot: 80,
    },
    {
      id: '5',
      hallName: 'Emerald Venue',
      location: 'San Francisco, USA',
      image: 'https://via.placeholder.com/150',
      fromDate: '2024-09-20',
      toDate: '2024-09-21',
      slots: ['Morning Slot'], // One slot
      pricePerSlot: 110,
    },
    {
      id: '6',
      hallName: 'Ocean View Hall',
      location: 'Las Vegas, USA',
      image: 'https://via.placeholder.com/150',
      fromDate: '2024-09-25',
      toDate: '2024-09-26',
      slots: ['Morning Slot', 'Evening Slot'], // Two slots
      pricePerSlot: 95,
    },
  ];

  const renderItem = ({ item }) => {
    const totalPrice = item.slots.length * item.pricePerSlot; // Calculate total price

    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.hallName}>{item.hallName}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.date}>
            {item.fromDate} - {item.toDate}
          </Text>
          <Text style={styles.slot}>
            {item.slots.length === 2
              ? `${item.slots[0]} - ${item.slots[1]}`
              : `${item.slots[0]}`}
          </Text>
          <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.pricePerSlot}>${item.pricePerSlot}/slot</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    elevation: 3, // Shadow on Android
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  hallName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  slot: {
    fontSize: 14,
    color: '#d9534f',
    marginTop: 5,
  },
  totalPrice: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    fontWeight: 'bold',
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pricePerSlot: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});
