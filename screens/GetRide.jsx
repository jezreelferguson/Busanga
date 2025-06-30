import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const RideInProgress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.statusText}>Ride in progress</Text>
        <View style={styles.bikeInfo}>
          <Image source={require('../assets/map-bike.png')} style={styles.bikeIcon} />
          <View>
            <Text style={styles.bikeName}>Bicycle Mark I</Text>
            <Text style={styles.battery}>🔋 89%</Text>
          </View>
        </View>
      </View>

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.6744,
          longitude: -1.5712,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: 6.6744, longitude: -1.5712 }}
          title="You"
          description="Your current location"
        />
        <Marker
          coordinate={{ latitude: 6.6764, longitude: -1.5682 }}
          title="Nearby Bike"
        >
          <Image source={require('../assets/map-bike.png')} style={{ width: 30, height: 30 }} />
        </Marker>
      </MapView>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>3.8 KM</Text>
          <Text style={styles.statLabel}>Distance</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>418 bpm</Text>
          <Text style={styles.statLabel}>Heart rate</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>1.4k kcal</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
      </View>

      {/* Timer Section */}
      <View style={styles.timerBox}>
        <View>
          <Text style={styles.timerLabel}>⏱ Time</Text>
          <Text style={styles.timerValue}>02:30:00</Text>
          <Text style={styles.timerPrice}>GHC 10.00</Text>
        </View>
        <Pressable style={styles.pauseBtn}>
          <Text style={{ fontSize: 20 }}>⏸</Text>
        </Pressable>
      </View>

      {/* End Ride Button */}
      <Pressable style={styles.endRideBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.endRideText}>🔒 End ride</Text>
      </Pressable>
    </View>
  );
};

export default RideInProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  statusText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  bikeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bikeIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: '600',
  },
  battery: {
    fontSize: 14,
    color: '#666',
  },
  map: {
    height: 250,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  statBox: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    flex: 1,
    marginHorizontal: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  timerBox: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
  },
  timerLabel: {
    fontSize: 14,
    color: '#666',
  },
  timerValue: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 4,
  },
  timerPrice: {
    fontSize: 12,
    color: '#888',
  },
  pauseBtn: {
    backgroundColor: '#F1F1F1',
    borderRadius: 50,
    padding: 10,
  },
  endRideBtn: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  endRideText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
