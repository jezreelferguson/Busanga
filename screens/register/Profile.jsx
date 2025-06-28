
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Tab from '../../navigation/Tab';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    })();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    Alert.alert('Logged Out', 'You have been logged out.');
    navigation.navigate('SignIn');
  };

  if (!user) {
    return (
      <LinearGradient colors={['#252525', '#F8D200', '#D8B806']} style={styles.container}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#252525', '#F8D200', '#D8B806']} style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={require('../../assets/avatar.jpeg')} // Placeholder image
          style={styles.avatar}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.value}>{user.age}</Text>
        </View>

        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </View>
    
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 20,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFE34B',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#252525',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    marginBottom: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#999',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  logoutButton: {
    backgroundColor: '#FFE34B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  logoutText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
});

export default Profile;
