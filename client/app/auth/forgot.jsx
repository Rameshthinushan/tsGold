import { View, TextInput, TouchableOpacity, Image, Text, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import styles from '../styles/authStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ForgetPassword() {
  return (
    <ScrollView 
      keyboardDismissMode="interactive"
      contentContainerStyle={styles.container}
    >
      <View>
        <Image 
          source={require('../../assets/appimages/fingerprint-scan.png')}
          style={{
            width: 60,
            height: 60,
            margin: 'auto'
          }}
        />
      </View>
      <Text style={{
        textAlign: 'center', 
        fontWeight: '600', 
        fontSize: 25,
        marginTop: 10
      }}>Fogot password ?</Text>
      <Text style={{
        textAlign: 'center', 
        fontSize: 12,
        marginTop: 5,
        color: 'grey'
      }}>No warries, We'll send your reset instructions</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'Username'}
      />

      <TouchableOpacity
        onPress={() => console.log('working')}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
       
      

         
        <Text style={{fontSize: 15, textAlign: 'center', marginTop: 10, color: 'grey'}}> Back to log in  </Text>
        
      
       
        
     
    </ScrollView>
      
  )
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 50,
//   },
//   logo: {
//     width: 200,
//     height:150,
//     margin: 'auto'
//   }, 
//   textInput: {
//     padding: 16,
//     borderColor: 'grey',
//     borderWidth: 1,
//     width: '100%',
//     marginBottom: 15,
//     borderRadius: 5
//   },
//   welcomeText: {
//     textAlign: 'center',
//     fontSize: 25,
//     fontWeight: '600',
//     color: '#841584',
//     marginBottom: 20
//   },
//   forgotPassowrd: {
//     textAlign: 'right',
//     marginBottom: 15,
//   },
//   buttonContainer: {
//     backgroundColor: '#841584',
//     borderRadius: 5,
//     padding:10
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 15
//   }
// })