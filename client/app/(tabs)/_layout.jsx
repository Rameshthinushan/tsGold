import {Tabs} from 'expo-router'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function _layout()  {
  return (
    <Tabs screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen
        name="dashbaord"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      {/* <Tabs.Screen
        name="sales"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="stock"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="purches"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            <Icon name="home" size={size} color={color} />;
          },
        }}
      /> */}
    </Tabs>
  )
}

