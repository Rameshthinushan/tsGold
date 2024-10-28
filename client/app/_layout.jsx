import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper"

export default function _layout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }} 
        /> 
        <Stack.Screen
          name='auth/forgot'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='auth/confirm'
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen 
          name='components/settings'
          options={{
            headerShown: true,
            title: 'Settings'
          }}
        />
      </Stack>
    </PaperProvider>
  )
}