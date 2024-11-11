import {TextInput, TouchableOpacity, Image, Text, View, ScrollView } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import styles from './styles/authStyles';
import { useState } from 'react';

export default function HomeScreen() {
  const [formData, setFormData] = useState({})
  const handleInputChange = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const login = () => {
    router.push('components/todayRate')
  }

  return (
    <ScrollView 
      keyboardDismissMode="interactive"
      contentContainerStyle={styles.container}
    >
      <View>
        <Image 
          source={require('../assets/appimages/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'Username'}
        onChangeText={(value) => handleInputChange(value, 'usename')}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder={'Password'}
        onChangeText={(value) => handleInputChange(value, 'password')}
      />
      <Link 
        href={'/auth/forgot'} 
        style={styles.forgotPassowrd}
      >
        <Text>Forgot password</Text>
      </Link>
      <TouchableOpacity
        onPress={login}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

