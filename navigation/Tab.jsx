import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'Dashboard', icon: 'home-outline', label: 'Home' },
    { name: 'Map', icon: 'bicycle-outline', label: 'Ride' },
    { name: 'Profile', icon: 'notifications-circle-outline', label: 'Bikes' },
    { name: 'Register', icon: 'person-outline', label: 'Account' },
  ];

  return (
    <LinearGradient
      colors={['#fff', '#fff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.navBar}
    >
      {tabs.map((tab, index) => {
        const isActive = route.name === tab.name;

        return (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => navigation.navigate(tab.name)}
          >
            <View style={[styles.iconContainer, isActive && styles.activeIcon]}>
              <Icon
                name={tab.icon}
                size={22}
                color={isActive ? '#000 ' : '#000'}
              />
            </View>
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 40,
    zIndex: 1000,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  activeIcon: {
    backgroundColor: '#FFE34B',
  },
  label: {
    fontSize: 12,
    color: '#000',
  },
  activeLabel: {
    color: '#000',
    fontWeight: '600',
  },
});

export default Tab;
