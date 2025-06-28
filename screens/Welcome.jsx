import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
// import LinearGradient from 'react-native-linear-gradient';

import { LinearGradient } from 'expo-linear-gradient';

import image from '../assets/logo-2 1.png';
import logo from '../assets/logo-2 2.png';
import bike from '../assets/bike-1st.png';

export default function Welcome() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('GetStarted');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={[ '#252525', '#F8D200', '#D8B806']} // Your gradient colors
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container} // Same style as before
    >
      <View style={{ alignItems: 'center', position: 'absolute', top: 200 }}>
        <Image source={image} style={styles.topLogo} />
        <Image source={logo} style={styles.logo} />
      </View>

      <Image source={bike} style={styles.bike} />

      <StatusBar style="auto" />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLogo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  logo: {
    width: 250,
    height: 150,
    marginTop: -50,
  },
  bike: {
    width: 390,
    height: 400,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: -4,
  },
});
