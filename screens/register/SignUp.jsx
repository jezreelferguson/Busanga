import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const SignUp = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!name || !age || !email || !password) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    if (isNaN(age) || age < 10 || age > 100) {
      Alert.alert('Invalid Age', 'Please enter a valid age between 10 and 100');
      return;
    }

    const user = { name, age, email, password };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    Alert.alert('Success', 'Account created. You can now sign in.');
    navigation.navigate('SignIn');
  };

  return (
    <LinearGradient colors={['#252525', '#F8D200', '#D8B806']} style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        placeholder="Age"
        style={styles.input}
        keyboardType="numeric"
        placeholderTextColor="#888"
        onChangeText={setAge}
        value={age}
      />

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

      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Text style={styles.switchText}>
        Already have an account?
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          {' '}Sign In
        </Text>
      </Text>
    </LinearGradient>
  );
};

export default SignUp;
