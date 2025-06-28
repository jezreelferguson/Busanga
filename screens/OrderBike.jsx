import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  ActivityIndicator,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const OrderBike = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalStep, setModalStep] = useState(null); // 'confirm' | 'unlocking' | 'started'
  const navigation = useNavigation();

  const scan = () => {
    navigation.navigate('QRScanner');
  };

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

  useEffect(() => {
    if (modalStep === 'unlocking') {
      const timer = setTimeout(() => {
        setModalStep('started');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [modalStep]);

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
      <Modal transparent visible={!!modalStep} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
        {modalStep === 'confirm' && (
  <>
    <Image source={require('../assets/clock.png')} style={styles.modalIcon} />
    <Text style={styles.title}>Let’s confirm your reservation</Text>
    <Text style={styles.message}>
      You may reserve a bike for ¢1/min{"\n"}Confirm reservation now
    </Text>
    <View style={styles.hr} />
    <View style={styles.actions}>
      <Pressable style={styles.cancel} onPress={() => setModalStep(null)}>
        <Text>Cancel</Text>
      </Pressable>
      <Pressable style={styles.confirm} onPress={() => setModalStep('unlocking')}>
        <Text style={{ color: '#fff' }}>Reserve</Text>
      </Pressable>
    </View>
  </>
)}

{modalStep === 'unlocking' && (
  <>
    <Image source={require('../assets/lock.png')} style={styles.modalIcon} />
    <Text style={styles.title}>Unlocking…</Text>
    <Text style={styles.message}>
      Hold your phone close to the bike to unlock and start riding
    </Text>
    <View style={styles.hr} />
    <View style={styles.actions}>
      <Pressable style={styles.cancel} onPress={() => setModalStep(null)}>
        <Text>Cancel</Text>
      </Pressable>
    </View>
  </>
)}

{modalStep === 'started' && (
  <>
    <Image source={require('../assets/check.png')} style={styles.modalIcon} />
    <Text style={styles.title}>Let’s get started</Text>
    <Text style={styles.message}>
      Bike number 3456 is unlocked. You can start your ride now.
    </Text>
    <View style={styles.hr} />
    <View style={styles.actions}>
      <Pressable style={styles.confirm} onPress={() => setModalStep(null)}>
        <Text style={{ color: '#fff' }}>Start riding</Text>
      </Pressable>
    </View>
  </>
)}

          </View>
        </View>
      </Modal>

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

          <View style={styles.card}>
            <Image source={require('../assets/map-bike.png')} style={styles.bikeImage} />
            <Text style={styles.bikeTitle}>Bicycle Mark I</Text>
            <Text style={styles.priceInfo}>¢10 Unlock • ¢2/min • ¢1/min Reserve</Text>

            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Distance</Text>
                <Text style={styles.infoValue}>4.6 KM</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Battery</Text>
                <Text style={styles.infoValue}>🔋 89%</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Time</Text>
                <Text style={styles.infoValue}>6 min</Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
              <Pressable style={styles.reserveButton} onPress={() => setModalStep('confirm')}>
                <Text style={styles.reserveText}>Reserve</Text>
              </Pressable>
              <Pressable style={styles.scanButton} onPress={scan}>
                <Text style={styles.scanText}>Scan to ride</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 0.6 },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

  bikeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bikeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -70,
  },
  priceInfo: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  reserveButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  scanButton: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 8,
  },
  reserveText: {
    color: '#000',
    fontWeight: '600',
  },
  scanText: {
    color: '#fff',
    fontWeight: '600',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    width: 300,
    alignItems: 'center',
  },
  modalIcon: {
    width: 30,
    height: 30,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  hr: {
    height: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  cancel: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginRight: 10,
  },
  confirm: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 10,
  },
});

export default OrderBike;