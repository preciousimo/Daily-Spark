import MarkdownDisplay from "@/components/core/day3/MarkdownDisplay"
import { Stack, Link } from "expo-router"
import { Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const description = `
# Onboarding

Build an Animated Onboarding Flow in **React Native**

📚 Today's Agenda:
- Introduction to Onboarding Flows
- Design Principles for Onboarding Screens
- Exploring Reanimated Library
- Building Your First Animated Onboarding Screen
- Enhancing User Experience with Layout Animations
- Wrap-Up and Demo
`

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day2/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </SafeAreaView>
  )
}
