import { Stack, Link } from "expo-router"
import { Text, View, Button } from 'react-native'


export default function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text style={{ fontFamily: 'AmaticBold', fontSize: 50 }}>Day Details Screen</Text>

      <Link href="/day2/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  )
}
