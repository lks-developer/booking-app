import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Updated DateTimePicker
import { Picker } from '@react-native-picker/picker'; // For slot selection

// Import react-datepicker for web usage
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker'; // Only for web platform

export default function ScreenHall() {
  // Dummy Data for the hall
  const hall = {
    name: 'Grand Hall',
    description: 'A spacious hall perfect for weddings and large gatherings.',
    rating: 4.5,
    area: 5000, // Square feet
    pricePerSlot: 150, // Price per slot in USD
    image: 'https://via.placeholder.com/600x300', // Placeholder image
  };

  const occasions = ['Birthday', 'Wedding', 'Conference', 'Party', 'Other'];

  // State for occasion picker
  const [occasion, setOccasion] = useState('Birthday');

  // States for From Date, To Date, and Slots
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [fromSlot, setFromSlot] = useState('morning');
  const [toSlot, setToSlot] = useState('morning');

  // States for DateTimePicker visibility (only for mobile platforms)
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);

  // Handle From Date selection
  const handleFromDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDatePicker(Platform.OS === 'ios');
    setFromDate(currentDate);
  };

  // Handle To Date selection
  const handleToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDatePicker(Platform.OS === 'ios');
    setToDate(currentDate);
  };

  const handleBooking = () => {
    alert(`Booking Confirmed: 
           From ${fromDate.toDateString()} (${fromSlot}) 
           To ${toDate.toDateString()} (${toSlot})`);
  };

  const slotOptions = ['morning', 'evening'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hall Images */}
      <Image source={{ uri: hall.image }} style={styles.hallImage} />

      {/* Hall Name, Description, Rating */}
      <View style={styles.detailsSection}>
        <Text style={styles.hallName}>{hall.name}</Text>
        <Text style={styles.description}>{hall.description}</Text>
        <Text style={styles.rating}>Rating: ⭐ {hall.rating}</Text>
        <Text style={styles.area}>Area: {hall.area} sq. feet</Text>
      </View>

      {/* Occasion Picker */}
      <Text style={styles.sectionTitle}>Select Occasion</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={occasion}
          onValueChange={(itemValue) => setOccasion(itemValue)}
          style={styles.fullWidthPicker} // Ensure full width picker
        >
          {occasions.map((occ) => (
            <Picker.Item label={occ} value={occ} key={occ} />
          ))}
        </Picker>
      </View>

      {/* From Date & Slot and To Date & Slot */}
      <View style={styles.dateSlotSection}>
        {/* From Date */}
        <View style={styles.dateColumn}>
          <Text style={styles.sectionTitle}>From Date</Text>
          <TouchableOpacity onPress={() => setShowFromDatePicker(true)} style={styles.dateSelectorButton}>
            <Text style={styles.dateSelectorText}>{fromDate.toDateString()}</Text>
          </TouchableOpacity>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={fromSlot}
              onValueChange={(itemValue) => setFromSlot(itemValue)}
              style={styles.fullWidthPicker}
            >
              {slotOptions.map((slot) => (
                <Picker.Item label={slot.charAt(0).toUpperCase() + slot.slice(1)} value={slot} key={slot} />
              ))}
            </Picker>
          </View>

          {/* Show DateTimePicker for From Date (Mobile) */}
          {showFromDatePicker && Platform.OS !== 'web' && (
            <DateTimePicker
              value={fromDate}
              mode="date"
              display="default"
              onChange={handleFromDateChange}
            />
          )}

          {/* Web DatePicker */}
          {Platform.OS === 'web' && (
            <ReactDatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="MM-dd-yyyy"
            />
          )}
        </View>

        {/* To Date */}
        <View style={styles.dateColumn}>
          <Text style={styles.sectionTitle}>To Date</Text>
          <TouchableOpacity onPress={() => setShowToDatePicker(true)} style={styles.dateSelectorButton}>
            <Text style={styles.dateSelectorText}>{toDate.toDateString()}</Text>
          </TouchableOpacity>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={toSlot}
              onValueChange={(itemValue) => setToSlot(itemValue)}
              style={styles.fullWidthPicker}
            >
              {slotOptions.map((slot) => (
                <Picker.Item label={slot.charAt(0).toUpperCase() + slot.slice(1)} value={slot} key={slot} />
              ))}
            </Picker>
          </View>

          {/* Show DateTimePicker for To Date (Mobile) */}
          {showToDatePicker && Platform.OS !== 'web' && (
            <DateTimePicker
              value={toDate}
              mode="date"
              display="default"
              onChange={handleToDateChange}
            />
          )}

          {/* Web DatePicker */}
          {Platform.OS === 'web' && (
            <ReactDatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="MM-dd-yyyy"
            />
          )}
        </View>
      </View>

      {/* Book Button */}
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  hallImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsSection: {
    marginBottom: 20,
  },
  hallName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
  },
  area: {
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateSlotSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateColumn: {
    width: '48%',
  },
  dateSelectorButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  dateSelectorText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  pickerContainer: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  fullWidthPicker: {
    width: '100%',
  },
  bookButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
