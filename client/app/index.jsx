import {TextInput, TouchableOpacity, Image, Text, Button, ScrollView } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import styles from './styles/authStyles';
import { useState } from 'react';

export default function HomeScreen() {
  const [error, setError] = useState({
    usename: false,
    password: false
  })
  

  const [formData, setFormData] = useState({})
  
  const handleInputChange = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  console.log(formData);

  const login = () => {

  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardDismissMode="interactive">
          <Image 
            source={require('../assets/appimages/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Username'}
            onChangeText={(value) => handleInputChange(value, 'usename')}
          />
          {/* <Text style={styles.errorText}>Please Enter Your Username..</Text> */}
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder={'Password'}
            onChangeText={(value) => handleInputChange(value, 'password')}
          />
          {/* <Text style={styles.errorText}>Please Enter Your Password..</Text> */}
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
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
