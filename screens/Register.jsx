import { View, Text, TextInput, Pressable, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [imageIdCard, setImageIdCard] = useState(null);
  const [imageSelfie, setImageSelfie] = useState(null);

  // Select image from gallery
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageIdCard(result.assets[0].uri);
    }
  };

  // Open camera to take selfie
  const takeSelfie = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageSelfie(result.assets[0].uri);
    }
  };
 const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Let's set up your profile</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput style={styles.input} placeholder="First Name" />

      <Text style={styles.label}>Last Name</Text>
      <TextInput style={styles.input} placeholder="Last Name" />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput style={styles.input} placeholder="YYYY-MM-DD" />

      <Text style={styles.label}>Student Reference Number</Text>
      <TextInput style={styles.input} placeholder="Student reference number" />

     <Text style={styles.label}>Student ID & Selfie</Text>

<View style={styles.imageRow}>

  <Pressable style={styles.imagePicker} onPress={takeSelfie}>
    <Text style={styles.imageText}>{imageSelfie ? 'Retake Selfie' : 'Take Selfie'}</Text>
  </Pressable>
  <Pressable style={styles.imagePicker} onPress={pickImage}>
    <Text style={styles.imageText}>{imageIdCard ? 'Change ID' : 'Add ID'}</Text>
  </Pressable>
</View>

<View style={styles.imageRow}>
  {imageIdCard && <Image source={{ uri: imageIdCard }} style={styles.imagePreview} />}
  {imageSelfie && <Image source={{ uri: imageSelfie }} style={styles.imagePreview} />}
</View>


      <Pressable style={styles.btn}  onPress={()=> navigation.navigate('Dashboard')}>
        <Text style={styles.btnText}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 0.5,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#D9D9D959',
    backgroundColor: '#D9D9D959',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: '#817E7E',
    width: '80%',
    marginTop: 10,
  },
  btn: {
    width: '80%',
    height: 50,
    backgroundColor: '#000000CC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    opacity: 0.6,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000CC',
  },
 imageRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  gap: 10, // optional for newer RN versions
  
},

imagePicker: {
  flex: 1,
  height: 100,
  backgroundColor: '#D9D9D959',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  marginVertical: 10,
  marginHorizontal: 5, // ensures spacing if gap doesn't work
  borderWidth: 2,
  borderColor: '#817E7ECC',
  borderStyle: 'dotted', // <-- this is key!

},

imagePreview: {
  flex: 1,
  height: 100,
  borderRadius: 10,
  resizeMode: 'cover',
  marginHorizontal: 5,
},

});



export default Register;
