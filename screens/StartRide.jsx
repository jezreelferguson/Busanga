import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const StartRide = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
        <Marker coordinate={{ latitude: 6.6744, longitude: -1.5712 }} title="You" />
        <Marker coordinate={{ latitude: 6.6754, longitude: -1.572 }}>
          <Image source={require('../assets/map-bike.png')} style={styles.bikeMarker} />
        </Marker>
        <Marker coordinate={{ latitude: 6.676, longitude: -1.5705 }}>
          <Image source={require('../assets/map-bike.png')} style={styles.bikeMarker} />
        </Marker>
      </MapView>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        <View style={styles.bikeHeader}>
          <View>
            <Text style={styles.bikeName}>Bicycle Mark I</Text>
            <Text style={styles.battery}>🔋 89%</Text>
          </View>
          <Text style={styles.price}>GHC 10.45</Text>
        </View>

        <Image
          source={require('../assets/map-bike.png')}
          style={styles.bikeImage}
        />

        <View style={styles.buttonRow}>
          <Pressable
  style={[
    styles.actionBtn,
    {
      borderColor: '#E0E0E0',
      borderWidth: 1,
      backgroundColor: 'transparent',
    }
  ]}
  onPress={() => navigation.navigate('Map')}
>
  <Text style={[styles.actionText, { color: '#000' }]}>Release</Text>
</Pressable>


          <Pressable
            style={styles.actionBtn}
            onPress={() => navigation.navigate('GetRide')}
          >
            <Text style={styles.actionText}>Start ride</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default StartRide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  bikeMarker: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 10,
  },
  bikeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 18,
    fontWeight: '600',
  },
  battery: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bikeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 12,
    margin:9
  },
  actionBtn: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom:23
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
