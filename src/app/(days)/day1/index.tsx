import { Stack } from "expo-router"
import { Text, View } from 'react-native'


export default function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1"}} />
      <Text style={{ fontFamily: 'AmaticBold', fontSize: 100}}>Day Details Screen</Text>
    </View>
  )
}
