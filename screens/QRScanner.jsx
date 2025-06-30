import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const QRScanner = () => {
  return (
    <View>
      <Text style={styles.text}>QRScanner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize:50,
    margin:50
  }
})

export default QRScanner