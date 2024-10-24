import { Tabs, router } from "expo-router";
import { Button } from "react-native";

export default function _layout () {
  return (
    <Tabs>
      <Tabs.Screen 
        name="feed"
        options={{
          headerRight: () => <Button onPress={() => router.push('feed/new')} title="ad more"/>,
          headerStyle: {
            backgroundColor: '#008080'
          }
        }}
      />    
      <Tabs.Screen name="sales"/>    
    </Tabs>
  )
}