import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../navigation/Tab'

const RideHistory = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.Text}>No Ride History Found!</Text>
    </View>
    <Tab />
    </>
  )
}

export default RideHistory

const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:400,
},
Text:{
    fontSize:20
}
    
})