import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Avatar, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

export default function Settings() { 
  const [settingList, setSettingsList] = useState([
    {
      'System Settings': [{ 
        text: 'Management', 
        icon: 'cog', 
        href: '#' 
      }, { 
        text: 'ReTake', 
        icon: 'rotate-3d-variant', 
        href: '#' 
      }, { 
        text: 'Return', 
        icon: 'keyboard-return', 
        href: '#' 
      }, { 
        text: 'Goldsimth', 
        icon: 'account', 
        href: '#' 
      }, { 
        text: 'Trash', 
        icon: 'trash-can', 
        href: '#' 
      }, { 
        text: 'Category', 
        icon: 'dots-grid', 
        href: '#' 
      }, { 
        text: 'Product Type', 
        icon: 'menu', 
        href: '#' 
      } 
    ]}, {
      'User Settings': [{ 
        text: 'Employee Management', 
        icon: 'account-circle', 
        href: '#' 
      }]
    }, {
      'Notification': [{ 
        text: 'Employee Management', 
        icon: 'bell', 
        href: '#' 
      }]
    }
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView>
          <View style={styles.searchContainer}>
            <Icon name="magnify" size={20} color="grey" style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="grey"
            />
          </View>

          <View style={styles.mainBody}>
            <View style={styles.editProfile}>
              <View style={styles.profileContainer}>
                <Avatar.Text size={50} label="RT" style={styles.profileAvatar} />
                <View>
                  <Text style={styles.nameTetx}>Thinushan.R</Text>
                  <Text style={styles.mailTetx}>rameshthinushan@gmail.com</Text>
                </View>
              </View>
              <Icon name="chevron-right" size={30} />
            </View>
            <Divider/>
            <View>
              {settingList.map((settings, i) => (
                <View key={i}>
                  {Object.keys(settings).map((key, j) => (
                    <View key={j}>
                      <Text style={styles.settingTitle}>{key}</Text>

                      {settings[key].map((subItem, index) => (
                        <TouchableOpacity 
                          key={index} 
                          style={styles.settingsItems}
                        >
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon 
                              name={subItem.icon} 
                              size={25} 
                              style={styles.settingsListicon} 
                            />
                            <Text style={styles.IconText}>{subItem.text}</Text>
                          </View>
                          <Icon 
                            name="chevron-right" 
                            size={30} 
                          />
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );  
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
});
