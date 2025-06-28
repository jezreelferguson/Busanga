import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons } from '@expo/vector-icons'; // You can use any icon lib
import Tab from '../navigation/Tab';

const Payment = () => {
  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose Payment Option</Text>

      {/* Payment Options */}
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Credit/Debit Card</Text>
        <FontAwesome5 name="credit-card" size={20} color="#817E7E" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Mobile Money</Text>
        <Entypo name="mobile" size={22} color="#817E7E" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Wallet</Text>
        <MaterialIcons name="account-balance-wallet" size={22} color="#817E7E" />
      </TouchableOpacity>

      {/* Add New Method Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>＋ Add New Method</Text>
      </TouchableOpacity>
    </ScrollView>
    <Tab />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    margin:50,
    marginBottom: 30,
  },
  option: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    color: '#817E7E',
    fontSize: 16,
    fontWeight: '500',
  },
  addButton: {
    marginTop: 30,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 25,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Payment;
