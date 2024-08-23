import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ScreenAccount() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.phone}>+1 234 567 890</Text>
      </View>

      {/* Account Options */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#007bff',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  phone: {
    fontSize: 16,
    color: '#666',
  },
  options: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  optionItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  logoutSection: {
    width: '100%',
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

