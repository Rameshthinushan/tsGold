import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Appbar, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import { router } from 'expo-router';

export default function HomeScreen() {
  const testing = () => {
    router.push('orders')
  }

  return (
    <Appbar.Header style={{ flexDirection: 'row', backgroundColor: '#1E201E', color: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%' }}>
        <Avatar.Text 
          size={35} 
          label="T" 
          style={{ margin: 10, borderRadius: 8, backgroundColor: '#46464670' }}
        />
        <View>
          <Text style={{ color: 'white', fontWeight: '600' }}>Ramesh Thinushan</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="checkbox-blank-circle" size={11} color='green' />
            <Text style={{ marginLeft: 8, color: 'white', fontSize: 12 }}>Active</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-between' }}>
        <Icon 
          name="bell" 
          color="white" 
          size={21}
          onPress={testing}
        />
        <Icon 
          name="white-balance-sunny"  
          color='white' 
          size={21}
        />
        <Icon 
          name="cog" 
          color='white' 
          size={21}
          style={{marginEnd: 10}}
        />
      </View>
    </Appbar.Header>
  );
}

// const styles = StyleSheet.create({})