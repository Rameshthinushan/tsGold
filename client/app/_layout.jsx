import { Stack } from "expo-router"
import { PaperProvider } from "react-native-paper"

export default function RootLayout () {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen
          name="auth/login"
        />
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="screens/notification" 
          options={{
            title: "Notifacation"
          }}
        />
      </Stack>
    </PaperProvider>
  )
}