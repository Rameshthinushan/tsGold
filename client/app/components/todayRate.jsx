import { router } from 'expo-router';
import React, {useState} from 'react';
import {TextInput, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
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
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={true}
          backdropColor={'green'}
         >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Change the Rate Fot 24 K</Text>
              <View>
                <TextInput
                  style={styles.textInput}
                  placeholder={'New Price'}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={'Enter Your Password'}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20}}>
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
           
              {/*  */}
            </View>
          </View>
        </Modal>

        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#eeeeee',
    borderRadius: 20,
    padding: 35,
    //alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18
  },
  textInput: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    width: '100%',
    borderRadius: 5,
    marginTop: 10
  }
});
