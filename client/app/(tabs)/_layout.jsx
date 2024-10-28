import {Tabs} from 'expo-router'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function _layout()  {
  const bottomTabs = [{
    name: 'dashboard',
    options: {
      headerShown: false,
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => {
        return <Icon name="home" size={size} color={color} />;
      },
    }
  }, {
    name: 'sales',
    options: {
      headerShown: false,
      tabBarLabel: 'Sales',
      tabBarIcon: ({ color, size }) => {
        return <Icon name="cart" size={size} color={color} />;
      },
    }
  }, {
    name: 'orders',
    options: {
      headerShown: false,
      tabBarLabel: 'Order',
      tabBarIcon: ({ color, size }) => {
        return <Icon name="cart-plus" size={size} color={color} />;
      },
    }
  }, {
    name: 'purchase',
    options: {
      headerShown: true,
      tabBarLabel: 'purchase',
      tabBarIcon: ({ color, size }) => {
        return <Icon name="dump-truck" size={size} color={color} />;
      },
    }
  }, {
    name: 'stock',
    options: {
      headerShown: true,
      tabBarLabel: 'Stock',
      tabBarIcon: ({ color, size }) => {
        return <Icon name="rhombus-split" size={size} color={color} />;
      },
    }
  }]

  return (
    <Tabs screenOptions={{headerShown: false}}>
      {
        bottomTabs.map((tabs, i) => (
          <Tabs.Screen
            key={i}
            name={tabs.name}
            options={tabs.options}
          />
        ))
      }
    </Tabs>
  )
}

