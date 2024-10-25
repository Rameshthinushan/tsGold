import { useState } from "react";
import { View, Text } from "react-native";
import { Appbar, Avatar,  Badge } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from "expo-router";

export default function AppBar () {
  const [profile, setProfile] = useState({
    name: 'John Doe', // Replace with actual user name
    photo: 'https://via.placeholder.com/150', // Replace with actual photo URL
  })

  const _handleSearch = () =>{
    router.push('screens/notification')
  }

  const _handleMore = () => console.log('Shown more');
  return (
    <Appbar.Header style={{flexDirection:'row', backgroundColor:'#1E201E', color: 'white'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%'}}>
        <Avatar.Text size={35} label="T" style={{margin: 10, borderRadius: 8, backgroundColor: '#46464670'}}/>
        <View>
          <Text style={{ color: 'white', fontWeight: 600}}>Ramesh Thinushan</Text>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="checkbox-blank-circle" size={11} color='green'/>
            <Text style={{ marginLeft: 8, color: 'white', fontSize:12 }}>Active</Text>
          </View>
          
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'space-between'}}>
        <Icon 
          name="bell" 
          color="white" 
          size={21}
          onPress={_handleSearch}
        />
        <Icon name="white-balance-sunny"  color='white' size={21}/>
        <Icon 
          name="dots-vertical" 
          color='white' 
          size={21}
          onPress={_handleMore}
        />
      </View>
    </Appbar.Header>
  )
}