import { View, Text } from "react-native";
import { Appbar, Avatar,  Badge } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from "expo-router";

export default function Dashboard() {



  return (
    <View>
      <Appbar.Header style={{flexDirection:'row', color: 'white'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '82%'}}>
          <Avatar.Text size={35} label="RT" style={{margin: 10, borderRadius: 8, backgroundColor: '#091057'}}/>
          <View>
            <Text style={{ fontWeight: 600}}>Ramesh Thinushan</Text>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="checkbox-blank-circle" size={11} color='green'/>
              <Text style={{ marginLeft: 8, fontSize:12 }}>Active</Text>
            </View>
            
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '15%', justifyContent: 'space-between'}}>
          <Icon 
            name="bell" 
            size={21}
          />
          <Icon 
            name="cog" 
            size={21}
            onPress={() => (router.push('components/settings'))}
          />
        </View>
      </Appbar.Header>
    </View>
  )
}

// const styles = StyleSheet.create({})