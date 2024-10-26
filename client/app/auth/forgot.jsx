import { StyleSheet, TextInput, TouchableOpacity, Image, Text, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import styles from '../styles/authStyles';

export default function ForgetPassword() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardDismissMode="interactive">
          {/* <Image 
            source={require('../assets/appimages/logo.png')}
            style={styles.logo}
          /> */}
          
          <TextInput
            style={styles.textInput}
            placeholder={'Username'}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder={'New Password'}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder={'Confirm Password'}
          />
          <TouchableOpacity
            onPress={() => console.log('working')}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Forgot</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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