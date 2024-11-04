// import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function Stock() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container} edges={['top']}>
//         <ScrollView>
//           <View style={{padding: 10}}>

//             <View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
//               <View style={styles.searchContainer}>
//                 <Icon name="magnify" size={20} color="grey" style={styles.searchIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Search..."
//                   placeholderTextColor="grey"
//                 />
//               </View>
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: '#2478f9',
//                   width: '20%',
//                   marginStart: 10,
//                   borderRadius: 9
                  
//                 }}
//               >
//                 <Text style={{
//                   color: 'white',
//                   textAlign: 'center',
//                   fontSize: 16,
//                   fontWeight: '600',
//                   margin: 'auto'
//                 }}>Create</Text>
//               </TouchableOpacity>
//             </View>
            

//             <View style={{flexDirection: 'row', marginBottom: 10}}>
//               <Text style={{width: '65%',  fontWeight: '700', color: 'grey'}}>Product</Text>
//               <Text style={{width: '15%',  fontWeight: '700', color: 'grey'}}>Stock</Text>
//               <Text style={{width: '20%',  textAlign: 'center',  fontWeight: '700', color: 'grey'}}>Price</Text>
//             </View>
//             {
//               Array.from({ length: 10 }).map((_, index) => (
//                 <View 
//                 key={index}
//                 style={{
//                   marginBottom: 10,
//                   backgroundColor: 'white',
//                   borderRadius: 10,
//                   padding: 10
//                 }}
//               >
//                 <View style={styles.tableRows}>
//                   <View style={{flexDirection: 'row', alignItems: 'center', width: '65%'}}>
//                     <Image 
//                       source={require('../../assets/appimages/chain.jpg')}
//                       style={styles.productImage}
//                     />
//                     <View>
//                       <Text style={{fontWeight: '500'}}>Box Chain With Penten</Text>
//                       <Text style={{color: 'grey'}}>Gram: 16g</Text>
//                     </View>
//                   </View>
//                   <View style={{width: '15%', flexDirection: 'row', alignItems: 'center'}}>
//                     <Icon name="checkbox-blank-circle" size={10} color='green'/>
//                     <Text style={{textAlign: 'center'}}>10</Text>
//                   </View>
//                   <View style={{width: '20%'}}>
//                     <Text style={{textAlign: 'center'}}>234,0000</Text>
//                   </View>
//                 </View>
//                 <View style={{flexDirection: 'row'}}>
//                   <View style={{width: '78%'}}></View>
//                   <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginEnd: 6}}>
//                     <Icon name='application-edit-outline' size={18} color={'green'}/>
//                     <Icon name='trash-can-outline' size={18} color={'red'}/>
//                     <Icon name='qrcode' size={18}/>
//                   </View>
//                 </View>
//               </View>
//               ))
//             }
//           </View>
//           <View style={{
//             position: 'static'
//           }}>
//             <Text>jvcdvc</Text>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   productImage: {
//     height: 50,
//     width: 50,
//     borderRadius: 50,
//     marginEnd: 10
//   },
//   tableRows: {
//     // marginBottom: 10,
//     flexDirection: 'row', 
//     alignItems: 'center',
//     //backgroundColor: 'white',
//     // paddingStart: 5,
//     // paddingEnd: 5,
//     // paddingTop: 10,
//     // paddingBottom: 10,
//     // borderRadius: 10
//   },
//   searchContainer: {
//     flex: 2,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     width: '70%'
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   input: {
//     flex: 2,
//     fontSize: 16,
//     color: '#000'
//   }
// })


import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Stock() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView>
          <View style={{ padding: 10 }}>

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
              <View style={styles.searchContainer}>
                <Icon name="magnify" size={20} color="grey" style={styles.searchIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Search..."
                  placeholderTextColor="grey"
                />
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
              <TouchableOpacity style={{
                //backgroundColor: '#198754',
                borderRadius: 50,
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginRight: 10,
                borderWidth: 2,       // Set border width
                borderColor: '#28a745' // Set border color to green
                //shadowColor: '#000',
                //shadowOffset: { width: 0, height: 4 },
                //shadowOpacity: 0.3,
                //shadowRadius: 4,
                // elevation: 8,
              }}>
                <Text style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: '600',
                  marginLeft: 8,
                  marginRight: 8,
                }}>In Stock</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                //backgroundColor: '#ffc107',
                borderRadius: 50,
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginRight: 10,
                borderWidth: 2,      
                borderColor: '#ffc107'
                //shadowColor: '#000',
                //shadowOffset: { width: 0, height: 4 },
                //shadowOpacity: 0.3,
                //shadowRadius: 4,
                // elevation: 8,
              }}>
                <Text style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: '600',
                  marginLeft: 8,
                  marginRight: 8,
                }}>Low Stock</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                //backgroundColor: '#dc3545',
                borderRadius: 50,
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginRight: 10,
                borderWidth: 2,      
                borderColor: '#dc3545'
                //shadowColor: '#000',
                //shadowOffset: { width: 0, height: 4 },
                //shadowOpacity: 0.3,
                //shadowRadius: 4,
                // elevation: 8,
              }}>
                <Text style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: '600',
                  marginLeft: 8,
                  marginRight: 8,
                }}>Out Of Stock</Text>
              </TouchableOpacity>
            </View>
            

            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ width: '65%', fontWeight: '700', color: 'grey' }}>Product</Text>
              <Text style={{ width: '15%', fontWeight: '700', color: 'grey' }}>Stock</Text>
              <Text style={{ width: '20%', textAlign: 'center', fontWeight: '700', color: 'grey' }}>Price</Text>
            </View>
            {
              Array.from({ length: 10 }).map((_, index) => (
                <View 
                  key={index}
                  style={{
                    marginBottom: 10,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 10,
                    shadowColor: '#000',            // Shadow color
                    shadowOffset: { width: 0, height: 4 }, // Offset for shadow
                    shadowOpacity: 0.2,             // Shadow opacity
                    shadowRadius: 5,                // Shadow blur radius
                    elevation: 5, 
                  }}
                >
                  <View style={styles.tableRows}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '65%' }}>
                      <Image 
                        source={require('../../assets/appimages/chain.jpg')}
                        style={styles.productImage}
                      />
                      <View>
                        <Text style={{ fontWeight: '500' }}>Box Chain With Pendant</Text>
                        <Text style={{ color: 'grey' }}>Gram: 16g</Text>
                      </View>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="checkbox-blank-circle" size={10} color='green' />
                      <Text style={{ textAlign: 'center' }}>10</Text>
                    </View>
                    <View style={{ width: '20%' }}>
                      <Text style={{ textAlign: 'center' }}>234,0000</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '72%' }}></View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginEnd: 6 }}>
                      <Icon name='application-edit-outline' size={25} color={'green'} />
                      <Icon name='trash-can-outline' size={25} color={'red'} />
                      <Icon name='qrcode' size={25} />
                    </View>
                  </View>
                </View>
              ))
            }
          </View>
        </ScrollView>
        
        <TouchableOpacity style={styles.floatingButton}>
          <Icon name="plus" size={24} color="white" />
          <Text style={styles.floatingButtonText}>Create</Text>
        </TouchableOpacity>
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
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f1f3',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '70%',
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
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2478f9',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
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
    marginLeft: 8,
  },
})
