import React from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Avatar, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = () => (
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

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Avatar.Text size={50} label="RT" style={{
                backgroundColor: '#091057',
                margin: 20
              }}/>
            </View>
            <View>
              <Text style={{fontSize: 20, fontWeight:'500'}}>Thinushan.R</Text>
              <Text style={{color: 'grey'}}>rameshthinushan@gmail.com</Text>
            </View>
          </View>
          <View>
            <Icon name="chevron-right" size={30}></Icon>
          </View>
        </View>
        <Divider/>
        <View style={{paddingStart: 20, paddingEnd: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Management</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>ReTake</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Return</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Goldsmith</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Trash</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <Divider/>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Management</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Management</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Management</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Management</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Icon name="cog" size={25} style={{margin: 10}}></Icon>
              </View>
              <View>  
                <Text style={{fontSize: 15}}>Management</Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-right" size={30}></Icon>
            </View>
          </View>
          <Divider/>
        </View>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    backgroundColor: '#EC8305',
    padding: 6,
    marginTop: 10,
    borderRadius: 20,
    width: 140
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
  searchContainer: {
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
    flex: 1,
    fontSize: 16,
    color: '#000'
  },
});

export default Settings;