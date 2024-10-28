import { View, TextInput, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
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
          source={require('../../assets/appimages/lock.png')}
          style={styles.authImage}
        />
      </View>
      <Text style={styles.titleText}>Set New Password</Text>
      <Text style={styles.subTitleText}>Must be at lease 8 character</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'New Password'}
      />
      <TextInput
        style={styles.textInput}
        placeholder={'Confirm Password'}
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
          <Link href={'/'}> Back to log in </Link>
        </Text>
      </View>
    </ScrollView>
  )
}
