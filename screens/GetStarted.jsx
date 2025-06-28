import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import image from '../assets/electric-bike.png';

const { width } = Dimensions.get('window');

export default function GetStarted() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Bike Image */}
      <Image source={image} style={styles.img} />

      {/* Bottom Card */}
      <View style={styles.card}>
        <Text style={styles.tagline}>
          Move freely, Live fully{'\n'}Stay healthy
        </Text>
        <Text style={styles.text}>
          Make your trip easier and more enjoyable without polluting with Busanga
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8d200',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    top: 50,
    width: 430,
    height: 500,
    resizeMode: 'cover',
    zIndex: 1,
  },
 card: {
  width: '85%',              // ⬅️ Smaller width relative to screen
  height: 300,               // ⬅️ Increase height (you can tweak this)
  backgroundColor: '#fff',
  borderRadius: 30,
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',  // ⬅️ Center content vertically
  marginTop: 40,
  marginBottom: 60,
  elevation: 5,              // ⬅️ Optional shadow on Android
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
},

  tagline: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#000',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#444',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
