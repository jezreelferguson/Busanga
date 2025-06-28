import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import Tab from '../navigation/Tab';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-SCREEN_WIDTH * 0.6));
  const navigation = useNavigation();

  const toggleSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: sidebarOpen ? -SCREEN_WIDTH * 0.6 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setSidebarOpen(!sidebarOpen);
  };

  const handleAdd = () => {
    alert('Top up initiated!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { left: slideAnim }]}>
        <Text style={styles.sidebarTitle}>Busanga</Text>
        {[
          { icon: 'person-circle-outline', label: 'Profile', route: 'Profile' },
          { icon: 'bicycle-outline', label: 'Ride History' },
          { icon: 'card-outline', label: 'Payment Methods' },
          { icon: 'repeat-outline', label: 'Subscriptions' },
          { icon: 'gift-outline', label: 'Invite and earn' },
          { icon: 'help-circle-outline', label: 'Support' },
        ].map((item, index) => (
          <Pressable
            key={index}
            style={styles.sidebarItem}
            onPress={() => item.route && navigation.navigate(item.route)}
          >
            <Icon name={item.icon} size={20} color="#333" />
            <Text style={styles.sidebarText}>{item.label}</Text>
          </Pressable>
        ))}
        <Pressable onPress={toggleSidebar}>
          <Text style={styles.closeText}>X</Text>
        </Pressable>
      </Animated.View>
      

      {/* Header */}
      <View style={styles.menuRow}>
        <Pressable onPress={toggleSidebar}>
          <Icon name="menu-outline" size={28} color="#000" />
        </Pressable>
      </View>

      {/* Cards */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          <View style={[styles.card, styles.yellow]}>
  <Icon name="wallet-outline" size={30} color="#fff" style={styles.cardIcon} />
  <Text style={styles.cardTitle}>Wallet Credit</Text>
  <Text style={styles.cardBalance}>GHS 100.00</Text>
  <Pressable style={styles.addButton} onPress={() => navigation.navigate('Payment')}>
    <Text style={styles.addText}  >Add</Text>
  </Pressable>
</View>

<View style={[styles.card, styles.green]}>
  <Icon name="bicycle-outline" size={30} color="#fff" style={styles.cardIcon} />
  <Text style={styles.cardTitle}>Total Rides</Text>
  <Text style={styles.cardValue}>12</Text>
</View>

<View style={[styles.card, styles.blue]}>
  <Icon name="location-outline" size={30} color="#fff" style={styles.cardIcon} />
  <Text style={styles.cardTitle}>Bikes Near You</Text>
  <Text style={styles.cardValue}>4</Text>
</View>

<View style={[styles.card, styles.purple]}>
  <Icon name="cash-outline" size={30} color="#fff" style={styles.cardIcon} />
  <Text style={styles.cardTitle}>Earned Credit</Text>
  <Text style={styles.cardValue}>GHS 45.20</Text>
</View>

        </View>
      </ScrollView>

      <Tab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  menuRow: {
    padding: 20,
    alignItems: 'flex-start',
    zIndex: 2,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '44%',
    minHeight: 140,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
  },
  cardBalance: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 8,
  },
  addText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  // Card Colors
  yellow: { backgroundColor: '#F8D200' },
  green: { backgroundColor: '#000' },
  blue: { backgroundColor: 'grey' },
  purple: { backgroundColor: '#B0B0B0' },

  // Sidebar
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: SCREEN_WIDTH * 0.6,
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 10,
  },
  sidebarText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  closeText: {
    marginTop: 30,
    color: '#fff',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    backgroundColor:'#000',
    borderRadius:100/2,
    width:30
  },

cardIcon: {
  marginBottom: 8,
},
});

export default Dashboard;
