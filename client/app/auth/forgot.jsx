import { View, TextInput, TouchableOpacity, Image, Text, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import styles from '../styles/authStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';

export default function ForgetPassword() {
  return (
    <ScrollView 
      keyboardDismissMode="interactive"
      contentContainerStyle={styles.container}
    >
      <View>
        <Image 
          source={require('../../assets/appimages/fingerprint-scan.png')}
          style={styles.authImage}
        />
      </View>
      <Text style={styles.titleText}>Fogot password ?</Text>
      <Text style={styles.subTitleText}>No warries, We'll send your reset instructions</Text>
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
      <View style={styles.backToLogin}>
        <Icon name="arrow-left" size={15} style={styles.IconLeftArrow} />
        <Text style={styles.backToLoginText}>
          <Link href={'auth/confirm'}> Back to log in </Link>
        </Text>
      </View>
    </ScrollView>
  )
}
