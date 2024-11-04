// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Orders() {
//   return (
//     <View>
//       <Text>orders</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})



import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Orders() {
  return (
    <SafeAreaProvider>
      <SafeAreaView 
        style={styles.container} 
        edges={['top']}
      >
        <ScrollView>
          <View style={{ padding: 10 }}>

            <View 
              style={{ 
                flex: 2, 
                flexDirection: 'row', 
                marginBottom: 20
              }}
            >
              <View style={styles.searchContainer}>
                <Icon name="magnify" size={20} color="grey" style={styles.searchIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Customer Search"
                  placeholderTextColor="grey"
                />
              </View>
               <TouchableOpacity style={styles.floatingButton}>
                <Text style={styles.floatingButtonText}>Bills</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  productImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginEnd: 10,
  },
  tableRows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f1f3',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '50%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    // borderWidth: 1,      
    // borderColor: '#495057'
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 2,
    fontSize: 16,
    color: '#000',
  },
  floatingButton: {
    // position: 'absolute',
    // bottom: 20,
    // right: 20,
    marginStart: 10,
    width: '20%',
    backgroundColor: '#2478f9',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    margin: 'auto'
    //marginLeft: 8,
  },
})
