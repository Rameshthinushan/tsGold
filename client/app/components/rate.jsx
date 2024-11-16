import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react'

export default function Rate() {
  const [list, setList] = useState([{
    title: 'Gold',
    icon: 'alpha-g'
  }, {
    title: 'Silver',
    icon: 'alpha-s'
  }, {
    title: 'Dimand',
    icon: 'alpha-d'
  }, {
    title: 'Platinum',
    icon: 'alpha-p'
  }])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView>
          <View style={{padding: 10}}>
          {list.map((list, index) => (
            <>
              <View 
                key={index} 
                style={styles.settingsItems}
              >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{backgroundColor: '#d5d9e3', padding: 5, borderRadius: 50, marginRight: 10}}>
                    <Icon 
                      name={list.icon} 
                      size={30} 
                      style={styles.settingsListicon} 
                    />
                  </View>
                  <Text style={styles.IconText}>{list.title}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
                  <Pressable style={{backgroundColor: '#d5d9e3', padding: 8, borderRadius: 50, marginEnd: 10}}>
                    <Icon 
                      name="lead-pencil" 
                      size={20} 
                      color={'green'}
                    />
                  </Pressable>
                  <Pressable style={{backgroundColor: '#d5d9e3', padding: 8, borderRadius: 50}}>
                    <Icon 
                      name="trash-can" 
                      size={20} 
                      color={'red'}
                    />
                  </Pressable>
                </View>
              </View>
              <Divider/>
            </>
          ))}
          </View>
        </ScrollView>
        {/* Floating Action Button */}
        <TouchableOpacity style={styles.floatingButton}>
          <Icon name="plus" size={24} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
    margin: 8

  },
  settingsListicon: {
    //marginRight: 10
  },
  IconText: {
    fontSize: 16
  }, 
  floatingButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#a020f0',
    borderRadius: 50,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  }
})