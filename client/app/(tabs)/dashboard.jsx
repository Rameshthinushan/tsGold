import { View, Text, StyleSheet, Image, ScrollView, Pressable, Dimensions  } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Appbar, Avatar,  Badge } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from "expo-router";

export default function Dashboard() {
  return (
    <View>
      <Appbar.Header style={{flexDirection:'row', color: 'white'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '82%'}}>
          <Avatar.Text size={35} label="RT" style={{margin: 10, borderRadius: 8, backgroundColor: '#a020f0'}}/>
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
          <CompanyCard/>
          <CardSection/>
          <SectionChartSales/>
          <SectionChartGold/>
        </View>
      </ScrollView>
    </View>
  )
}

const CardSection = () => {
  const rating = () => {
    router.push('../components/rate');
  }
  return (
    <View>
      <View 
        style={{
        ...styles.cardRow,
        ...styles.cardRowFirst
        }}
      >
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
              source={require('../../assets/appimages/sales.png')}
              style={styles.cardImg}
            />
          </View>
          <Text style={styles.cartTitle}>Total Sales</Text>
          <Text style={styles.cartSubTitle}>240,000,00</Text>
        </View>
        <View style={{
          ...styles.card,
          ...styles.numberOfSalesCard
        }}>
          <View 
            style={{
              ...styles.cardIcon,
              ...styles.numberOfSales
            }}
          >
            <Image 
              source={require('../../assets/appimages/shopping-cart.png')}
              style={styles.cardImg}
            />
          </View>
          <Text style={styles.cartTitle}>Number of Orders</Text>
          <Text style={styles.cartSubTitle}>80</Text>
        </View>
      </View>
      <View style={styles.cardRow}>

        <Pressable 
          style={[styles.card,styles.goldRateCard]}
          onPress={rating}
        >
          <View 
            style={{
              ...styles.cardIcon,
              ...styles.goldIcon
            }}
          >
            <Image 
              source={require('../../assets/appimages/gold-ingots.png')}
              style={styles.cardImg}
            />
          </View>
          <Text style={styles.cartTitle}>Today Gold Rate</Text>
          <Text style={styles.cartSubTitle}>213,000</Text>
        </Pressable>
        
        <View style={{
          ...styles.card,
          ...styles.silverRateCard
        }}>
          <View 
            style={{
              ...styles.cardIcon,
              ...styles.silverIcon
            }}
          >
            <Image 
              source={require('../../assets/appimages/gold-medal.png')}
              style={styles.cardImg}
            />
          </View>
          <Text style={styles.cartTitle}>Today Gold Rate</Text>
          <Text style={styles.cartSubTitle}>213,000</Text>
        </View>
      </View>
    </View>
  )
}

const CompanyCard = () => {
  return (
    <View style={styles.cardStore}>
      <View style={styles.storeCardContainer}>
        <View style={styles.homeIconSection}>
          <View style={ styles.homeIcon }>
            <Image 
              source={require('../../assets/appimages/home.png')}
              style={styles.cardImg}
            />
          </View>
        </View>
        <View style={styles.storeDescription}>
          <Text style={styles.storeText}>New Lalita Store - Jaffna</Text>
          <Text style={styles.dateRange} >2024.11.01 To 2024.11.09</Text>
        </View>
      </View>
    </View>
  )
}

const SectionChartSales = () => {
  const screenWidth = Dimensions.get("window").width; 
  const  data={
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [{
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]}
    ]
  }

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, 
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }

  return (
    <View style={{
      marginVertical: 20,
      backgroundColor: 'white',
      padding: 10,
      flex: 1,
      alignItems: 'center',
      borderRadius: 18
    }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{width: '10%'}}>
          <Icon name="information-outline" size={25}></Icon>
        </Text>
        <Text style={{width: '82%', fontSize: 15, fontWeight: '700'}}>Last 6 Month Sales Detailes</Text>
        {/* <Text style={{width: '10%'}}> */}
        <Pressable>
          <Icon name="arrow-right" size={20}></Icon>
        </Pressable>
          
        {/* </Text> */}
      </View>
      
      <LineChart
        data={data}
        width={screenWidth-70}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k "
        yAxisInterval={1} 
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 15,
          borderRadius: 16, 
          // marginBottom: 100
        }}
      /> 
    </View>
  );
};

const SectionChartGold = () => {
  const screenWidth = Dimensions.get("window").width; 
  const  data={
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [{
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]}
    ]
  }

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, 
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }

  return (
    <View style={{marginBottom: 200}}>
      
      <Text style={{fontWeight: 700, fontSize: 12, color: 'grey', marginBottom: 8, textAlign: 'right', marginEnd: 10}}>Last 7 Days Gold Rating</Text>
      <LineChart
        data={data}
        width={screenWidth-39}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k "
        yAxisInterval={1} 
        chartConfig={chartConfig}
        bezier
        style={{
          //marginVertical: 20,
          borderRadius: 16, 
          // marginBottom: 100
        }}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20
  },
  containerCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10, 
    marginBottom: (-65)
  },
  card: {
    width: '48%', 
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20 
  },

  salesCard: {
    backgroundColor: '#a020f0'
  },
  numberOfSalesCard: {
    backgroundColor: '#f46c6d'
  },
  goldRateCard: {
    backgroundColor: '#79c2ed',
  },
  silverRateCard: {
    backgroundColor: '#f4b57b'
  },

  cardIcon: {
    borderRadius: 50,
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 50, 
    height: 50,
    marginBottom: 10
  },
  salesIcon: {
    backgroundColor: '#bf77edf5', 
  },
  numberOfSales: {
    backgroundColor: '#f69b9b'
  },
  goldIcon: {
    backgroundColor: '#a1d0eb'
  },
  silverIcon: {
    backgroundColor: '#f7c79c'
  },
  cardImg: {
    width: 30,
    height: 30,
  },
  cartTitle: {
    color: '#ffff',
    fontWeight: '600'
  },
  cartSubTitle: {
    color: '#ffff',
    fontWeight: '600',
    fontSize: 20
  },
  homeIcon: {
    borderRadius: 50,
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 50, 
    height: 50,
    backgroundColor: '#bf77edf5'
  },
  cardStore: {
    backgroundColor: '#a020f0',
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 20  
  },
  storeCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeIconSection: {
    width: '20%'
  },
  storeText: {
    color: 'white', 
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5
  },
  dateRange: {
    color: 'white', 
    fontWeight: '700',
    fontSize: 13,
  },
  cardRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  cardRowFirst: {
    marginVertical: 20
  },
  storeDescription:{ width: '80%'}
});