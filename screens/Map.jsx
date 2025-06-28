import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator, Alert, Image, TextInput, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import Tab from '../navigation/Tab';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location access is needed to book a ride.');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      setLoading(false);
    })();
  }, []);

  // const handleBookRide = () => {
  //   Alert.alert('Ride Booked', 'Your bicycle ride is on the way!');
  // };

  if (loading || !location) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Getting your location...</Text>
      </View>
    );
  }

  return (
    <>
  <View style={styles.container}>
    <MapView
      style={styles.map}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation={true}
    >
      <Marker
        coordinate={{
          latitude: location.latitude + 0.001,
          longitude: location.longitude + 0.001,
        }}
        title="Nearby Bicycle"
        description="Available now"
        pinColor="green"
      />
    </MapView>

    <View style={styles.footer}>
      <View style={styles.handleBar} />
      <View style={styles.searchContainer}>
        <Image source={require('../assets/Search.png')} style={styles.searchIcon} />
        <TextInput placeholder="Enter your location" style={styles.searchInput} />
      </View>

      <Text style={styles.infoText}>Find a Bike Nearby</Text>
      <Text style={styles.infoLocation}>Commercial Area, KNUST</Text>

      {[1, 2].map((_, index) => (
        <View key={index} style={styles.cardRow}>
          <Image source={require('../assets/map-bike.png')} style={styles.bikeImage} />

          <View style={styles.cardDetails}>
            <Text style={styles.bikeName}>Bicycle Mark I</Text>
            <Text style={styles.bikeRate}>¢0.45/min</Text>
            <View style={styles.bikeStats}>
              <Text style={styles.battery}>🔋 89%</Text>
              <Text style={styles.km}>60km</Text>
            </View>
          </View>

          <Pressable style={styles.rideButton} onPress={()=> navigation.navigate('OrderBike')}>
            <Text style={styles.rideText}>Ride</Text>
          </Pressable>
        </View>
      ))}
    </View>
  </View>
  <Tab />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 0.6,
  },
 footer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '60%',
  backgroundColor: '#fff',
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  padding: 20,
},
handleBar: {
  width: 60,
  height: 5,
  backgroundColor: '#D9D9D9',
  borderRadius: 3,
  alignSelf: 'center',
  marginBottom: 16,
},
searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F5F5F5',
  borderRadius: 16,
  paddingHorizontal: 16,
  paddingVertical: 12,
  marginBottom: 16,
},
searchIcon: {
  width: 20,
  height: 20,
  marginRight: 10,
  tintColor: '#999',
},
searchInput: {
  flex: 1,
  fontSize: 16,
},
infoText: {
  fontSize: 18,
  fontWeight: '600',
  color: '#222',
  marginBottom: 4,
},
infoLocation: {
  fontSize: 14,
  color: '#888',
  marginBottom: 16,
},
cardRow: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FAFAFA',
  borderRadius: 16,
  padding: 12,
  marginBottom: 14,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 1,
},
bikeImage: {
  width: 60,
  height: 60,
  resizeMode: 'contain',
  marginRight: 12,
  
},
cardDetails: {
  flex: 1,
},
bikeName: {
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 2,
},
bikeRate: {
  fontSize: 14,
  color: '#777',
  marginBottom: 4,
},
bikeStats: {
  flexDirection: 'row',
  gap: 12,
},
battery: {
  fontSize: 12,
  color: '#444',
},
km: {
  fontSize: 12,
  color: '#444',
  backgroundColor: '#fff',
  borderColor: '#FFD700',
  borderWidth: 1,
  paddingHorizontal: 8,
  paddingVertical: 2,
  borderRadius: 8,
  overflow: 'hidden',
},
rideButton: {
  backgroundColor: '#FFE34B',
  borderRadius: 14,
  paddingHorizontal: 16,
  paddingVertical: 8,
  alignSelf: 'center',
},
rideText: {
  fontWeight: 'bold',
  fontSize: 14,
},
loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 0.5,
  },

});

export default Map;
