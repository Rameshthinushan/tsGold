import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Stock() {
  const [categoryList, setCategoryList] = useState([{
    categoryName: 'Gold Chain',
    categorySlug: 'gold_chain',
    CategoryImage: require('../../assets/appimages/chain_new.jpg')
  }, {
    categoryName: 'Rings',
    categorySlug: 'rings',
    CategoryImage: require('../../assets/appimages/gold_rings.jpg')
  }, {
    categoryName: 'Earrings',
    categorySlug: 'earrings',
    CategoryImage: require('../../assets/appimages/eyerrings.jpg')
  }, {
    categoryName: 'Bengals',
    categorySlug: 'earrings',
    CategoryImage: require('../../assets/appimages/bangels.png')
  }, {
    categoryName: 'Boys Bengals',
    categorySlug: 'earrings',
    CategoryImage: require('../../assets/appimages/boys_bangels.jpg')
  }, {
    categoryName: 'Baby Bengals',
    categorySlug: 'earrings',
    CategoryImage: require('../../assets/appimages/baby_bangels.jpg')
  }, {
    categoryName: 'Silver Chain',
    categorySlug: 'silver_chain',
    CategoryImage: require('../../assets/appimages/silver_chain.jpg')
  }]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView>
          {/* Search Bar */}
          <View style={styles.header}>
            <View style={styles.searchContainer}>
              <Icon name="magnify" size={24} color="grey" style={styles.searchIcon} />
              <TextInput
                style={styles.input}
                placeholder="Search products..."
                placeholderTextColor="grey"
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', margin: 15, alignItems: 'center'}}>
            <Icon name="format-list-bulleted" size={20} style={{marginEnd: 10}}></Icon>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Product Category</Text>
          </View>

          {/* Product Listing */}
          <View style={styles.productGrid}>
            {categoryList.map((category, index) => (
              <View key={index} style={styles.card}>
                <Image 
                  source={category.CategoryImage}
                  style={styles.productImage}
                />
                <View style={styles.cardContent}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="circle" color={'green'} style={{marginEnd: 10}}></Icon>
                    <Text style={styles.productTitle}>{category.categoryName}</Text>
                    
                  </View>
                  <Pressable>
                    <Icon name="arrow-right" size={20}></Icon>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.floatingButton}>
          <Icon name="plus" size={24} color="white" />
        </TouchableOpacity>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#495057',
  },
  createButton: {
    backgroundColor: '#2478f9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
  productSubtext: {
    fontSize: 14,
    color: '#6c757d',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
  },
  stockText: {
    fontSize: 14,
    color: '#28a745',
  },
  priceText: {
    fontSize: 14,
    color: '#dc3545',
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2478f9',
    borderRadius: 50,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});
