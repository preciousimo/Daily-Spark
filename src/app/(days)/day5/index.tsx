import MarkdownDisplay from "@/components/core/day3/MarkdownDisplay"
import { Stack, Link } from "expo-router"
import { Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const description = `
# AIRBNB Maps

Build the AIRBNB map with **React Native**

📚 Today's Agenda:
- Introduction to React Native Maps
- Setting Up Map Views in Expo
- Adding Points of Interest to the Map
- Creating a Scrollable Carousel for POIs
- Synchronizing the Carousel with the Map
- Styling Map Components
- Handling User Interaction with Map and List
- Recap and Q&A
`

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Stack.Screen options={{ title: "Day 5: Maps" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day5/airbnb" asChild>
        <Button title="Go to AIRBNB Map" />
      </Link>

    </SafeAreaView>
  )
}
