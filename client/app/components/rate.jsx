import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react'

export default function Rate() {
  const [list, setList] = useState([{
    title: 'Gold',
    icon: 'gold'
  }, {
    title: 'Silver',
    icon: 'gold'
  }, {
    title: 'Dimand',
    icon: 'diamond-stone'
  }, {
    title: 'Platinum',
    icon: 'gold'
  }])

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={{padding: 10}}>
          {list.map((list, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.settingsItems}
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon 
                  name={list.icon} 
                  size={25} 
                  style={styles.settingsListicon} 
                />
                <Text style={styles.IconText}>{list.title}</Text>
              </View>
              {/* <Icon 
                name="chevron-right" 
                size={30} 
              /> */}
              <Icon 
                name="chevron-right" 
                size={30} 
              />
            </TouchableOpacity>
          ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 2,
    fontSize: 16,
    color: '#000'
  },
  profileAvatar: {
    backgroundColor: '#091057',
    marginEnd: 10
  },
  editProfile: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginBottom: 10
  },
  mainBody: {
    flex: 3, 
    margin: 15
  },
  profileContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  nameTetx: {
    fontSize: 20, 
    fontWeight: '500'
  }, 
  mailTetx: {
    color: 'grey'
  },
  settingTitle: { 
    fontSize: 16,
    fontWeight: '500', 
    color: 'grey',
    marginVertical: 10, 
  },
  settingsItems: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    margin: 5
  },
  settingsListicon: {
    marginRight: 10
  },
  IconText: {
    fontSize: 16
  }
})