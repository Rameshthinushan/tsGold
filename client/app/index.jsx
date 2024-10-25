import { View, StyleSheet } from "react-native";

import Dashboard from "./screens/dashboard";
import Sales from "./screens/sales";
import Purchase from "./screens/purchase";
import Orders from "./screens/orders";

import AppBar from "./appbar";
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


export default function HomeScreen () {
  return (
    <>
    <AppBar/>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: '#1E201E', 
          paddingBottom:10,
          paddingTop: 5,
          height: 65
        }, // Set background color here
        tabBarActiveTintColor: '#ffffff', // Active tab icon/text color
        tabBarInactiveTintColor: '#888888', // Inactive tab icon/text color
      }}
      // tabBar={({ navigation, state, descriptors, insets }) => (
      //   <BottomNavigation.Bar
      //     navigationState={state}
      //     safeAreaInsets={insets}
      //     onTabPress={({ route, preventDefault }) => {
      //       const event = navigation.emit({
      //         type: 'tabPress',
      //         target: route.key,
      //         canPreventDefault: true,
      //       });

      //       if (event.defaultPrevented) {
      //         preventDefault();
      //       } else {
      //        navigation.dispatch({
      //           ...CommonActions.navigate(route.name, route.params),
      //           target: state.key,
      //         });
      //       }
      //     }}
      //     renderIcon={({ route, focused, color }) => {
      //       const { options } = descriptors[route.key];
      //       if (options.tabBarIcon) {
      //         return options.tabBarIcon({ focused, color, size: 24 });
      //       }

      //       return null;
      //     }}
      //     getLabelText={({ route }) => {
      //       const { options } = descriptors[route.key];
      //       const label =
      //         options.tabBarLabel !== undefined
      //           ? options.tabBarLabel
      //           : options.title !== undefined
      //           ? options.title
      //           : route.title;

      //       return label;
      //     }}
      //   />
      // )}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Sales}
        options={{
          tabBarLabel: 'Sales',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cart" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="purchase"
        component={Purchase}
        options={{
          tabBarLabel: 'Purchase',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="shopping" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="orders"
        component={Purchase}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cart-heart" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="more"
        component={Purchase}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
      
    </Tab.Navigator>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});