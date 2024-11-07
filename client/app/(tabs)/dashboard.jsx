import { View, Text, StyleSheet, Image, ScrollView  } from "react-native";
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
      <ScrollView>
        <View style={styles.container}>
          <CardSection/>
        </View>
      </ScrollView>
    </View>
  )
}

const CardSection = () => {
  return (
    <View style={styles.containerCard}>
      <View style={{
        ...styles.card,
        ...styles.salesCard
      }}>
        <View 
          style={{
            ...styles.cardIcon,
            ...styles.salesIcon
          }}
        >
        <Image 
          source={require('../../assets/appimages/shopping-bag.png')}
          style={styles.cardImg} // Image size
        />
      </View>
        <Text style={{
          color: '#fff',
          fontWeight: 'bold',
        }}>Card 1</Text>
        
      </View>

            
            <View style={{
              width: '48%', 
              aspectRatio: 1,
              backgroundColor: '#f46c6d',
              // alignItems: 'center',
              // justifyContent: 'center',
              borderRadius: 10,
              marginBottom: 10, 
            }}>
              <View 
                style={{
                  backgroundColor: '#f69b9b',
                  borderRadius: 50, // Makes it circular
                  padding: 10, // Adds space around the image
                  alignItems: 'center', // Centers the image horizontally
                  justifyContent: 'center', // Centers the image vertically
                  width: 60, // Circle diameter
                  height: 60, // Circle diameter
                }}
              >
              <Image 
                source={require('../../assets/appimages/lock.png')}
                style={{ width: 40, height: 40 }} // Image size
              />
            </View>
              <Text style={{
                color: '#fff',
                fontWeight: 'bold',
              }}>Card 1</Text>
            </View>
            <View style={{
              width: '48%', 
              aspectRatio: 1,
              backgroundColor: '#79c2ed',
              //alignItems: 'center',
              //justifyContent: 'center',
              borderRadius: 10,
              marginBottom: 10, 
            }}>

  <View 
                style={{
                  backgroundColor: '#a1d0eb',
                  borderRadius: 50, // Makes it circular
                  padding: 10, // Adds space around the image
                  alignItems: 'center', // Centers the image horizontally
                  justifyContent: 'center', // Centers the image vertically
                  width: 60, // Circle diameter
                  height: 60, // Circle diameter
                }}
              >
              <Image 
                source={require('../../assets/appimages/lock.png')}
                style={{ width: 40, height: 40 }} // Image size
              />
            </View>

              <Text style={{
                color: '#fff',
                fontWeight: 'bold',
              }}>Card 1</Text>
            </View>
            <View style={{
              width: '48%', 
              aspectRatio: 1,
              backgroundColor: '#f4b57b',
              //alignItems: 'center',
              //justifyContent: 'center',
              borderRadius: 10,
              marginBottom: 10, 
            }}>
              <View 
                style={{
                  backgroundColor: '#f7c79c',
                  borderRadius: 50, // Makes it circular
                  padding: 10, // Adds space around the image
                  alignItems: 'center', // Centers the image horizontally
                  justifyContent: 'center', // Centers the image vertically
                  width: 60, // Circle diameter
                  height: 60, // Circle diameter
                }}
              >
              <Image 
                source={require('../../assets/appimages/lock.png')}
                style={{ width: 40, height: 40 }} // Image size
              />
            </View>
              <Text style={{
                color: '#fff',
                fontWeight: 'bold',
              }}>Card 1</Text>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 10
  },
  containerCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10, 
  },
  card: {
    width: '48%', 
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10, 
  },
  salesCard: {
    backgroundColor: '#a29eff'
  },
  cardIcon: {
    borderRadius: 50,
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 60, 
    height: 60,
  },
  salesIcon: {
    backgroundColor: '#b7b4ff', 
  },
  cardImg: {
    width: 40,
    height: 40
  }
});