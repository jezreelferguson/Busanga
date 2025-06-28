import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable, Alert, StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;

    if (!parsedUser || parsedUser.email !== email || parsedUser.password !== password) {
      Alert.alert('Invalid credentials', 'Please check your email or password');
    } else {
      Alert.alert('Welcome to Busanga', 'Logged in successfully!');
      navigation.navigate('Dashboard'); // Replace 'Home' with your actual home screen
    }
  };
  

  return (
    <LinearGradient colors={['#252525', '#F8D200', '#D8B806']} style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={setPassword}
        value={password}
      />
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <Text style={styles.switchText}>
        Don't have an account?
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          {' '}Sign Up
        </Text>
      </Text>
    </LinearGradient>
  );
};

export default SignIn;
