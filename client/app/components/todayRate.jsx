import { router } from 'expo-router';
import React, {useState} from 'react';
import {TextInput, Modal, StyleSheet, Text, Pressable, View, CheckBox} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

export default function TodayRate() {
  const cancel = () => {
    router.push('/')
  }

  const Add = () => {
    router.push('(tabs)/dashboard')
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titleText}>Change The Rates</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'New Price For Gold, Current - 213,000'}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'New Price For Silver, Current - 213,000'}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={cancel}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={Add}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View> 
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 40,
    padding: 30
  },
  buttonContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginVertical: 20
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: '48%'
  },
  buttonOpen: {
    backgroundColor: '#909294',
  },
  buttonClose: {
    backgroundColor: '#dc3545',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    marginVertical: 15,
    fontWeight: '600',
    fontSize: 18
  },
  textInput: {
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#e2e3e5'
  }
});
